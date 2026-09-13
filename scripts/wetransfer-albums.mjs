// Helper for pulling photos out of WeTransfer "Albums" share links.
//
//   node scripts/wetransfer-albums.mjs list       -> prints every album with name, description, file count and size
//   node scripts/wetransfer-albums.mjs download   -> downloads every photo (videos skipped) into IMG_TO_ADD/<slug>/
//
// Links are read from scripts/wetransfer-links.txt (one per line).
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(import.meta.dirname, '..');
const LINKS_FILE = path.join(ROOT, 'scripts', 'wetransfer-links.txt');
const OUT_DIR = path.join(ROOT, 'IMG_TO_ADD');
const TMP_DIR = path.join(ROOT, 'IMG_TO_ADD', '_zips');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)';

const cmd = process.argv[2] ?? 'list';

function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

async function resolveAlbumId(link) {
  const r = await fetch(link, { redirect: 'manual', headers: { 'user-agent': UA } });
  const loc = r.headers.get('location') ?? '';
  const m = loc.match(/\/albums\/([0-9a-f]+)/);
  if (!m) throw new Error(`Could not resolve ${link} (status ${r.status}, location ${loc})`);
  return m[1];
}

async function fetchAlbum(id) {
  const r = await fetch(`https://wetransfer.com/api/v4/albums/${id}`, {
    headers: { accept: 'application/json', 'user-agent': UA },
  });
  if (!r.ok) throw new Error(`Album ${id}: HTTP ${r.status}`);
  return r.json();
}

async function getFileLink(album, file) {
  const r = await fetch(`https://wetransfer.com/api/v4/transfers/${album.id}/download`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', accept: 'application/json', 'user-agent': UA, 'x-requested-with': 'XMLHttpRequest' },
    body: JSON.stringify({ security_hash: album.security_hash, intent: 'single_file', file_ids: [file.id] }),
  });
  if (!r.ok) throw new Error(`Link for ${album.name}/${file.name}: HTTP ${r.status} ${await r.text()}`);
  const j = await r.json();
  if (!j.direct_link) throw new Error(`No direct_link for ${file.name}`);
  return j.direct_link;
}

async function getZipLink(album) {
  const r = await fetch(`https://wetransfer.com/api/v4/transfers/${album.id}/download`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      'user-agent': UA,
      'x-requested-with': 'XMLHttpRequest',
    },
    body: JSON.stringify({ security_hash: album.security_hash, intent: 'entire_transfer' }),
  });
  if (!r.ok) throw new Error(`Download link for ${album.name}: HTTP ${r.status} ${await r.text()}`);
  const j = await r.json();
  if (!j.direct_link) throw new Error(`No direct_link for ${album.name}: ${JSON.stringify(j)}`);
  return j.direct_link;
}

const links = (await fs.readFile(LINKS_FILE, 'utf8'))
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter((l) => l.startsWith('http'));

const albums = [];
for (const link of links) {
  const id = await resolveAlbumId(link);
  const album = await fetchAlbum(id);
  albums.push({ link, ...album });
}

const mb = (b) => (b / 1024 / 1024).toFixed(1);

if (cmd === 'list') {
  let total = 0;
  let count = 0;
  for (const a of albums) {
    const bytes = a.files.reduce((s, f) => s + f.size, 0);
    const exts = [...new Set(a.files.map((f) => path.extname(f.name).toLowerCase()))].join(' ');
    total += bytes;
    count += a.files.length;
    console.log(
      `${slugify(a.name).padEnd(28)} | ${a.name.padEnd(26)} | ${(a.message ?? '').padEnd(26)} | ${String(a.files.length).padStart(2)} files | ${mb(bytes).padStart(6)} MB | ${exts}`,
    );
  }
  console.log(`\nTOTAL: ${albums.length} albums, ${count} files, ${mb(total)} MB`);
}

if (cmd === 'download') {
  const IMAGE_RE = /.(jpe?g|png|heic|webp)$/i;
  for (const a of albums) {
    const slug = slugify(a.name);
    const dest = path.join(OUT_DIR, slug);
    await fs.mkdir(dest, { recursive: true });
    const photos = a.files.filter((f) => IMAGE_RE.test(f.name));
    let done = 0;
    for (const f of photos) {
      const target = path.join(dest, f.name);
      const st = await fs.stat(target).catch(() => null);
      if (st && st.size === f.size) { done++; continue; }
      const url = await getFileLink(a, f);
      const r = await fetch(url, { headers: { 'user-agent': UA } });
      if (!r.ok) throw new Error(`${slug}/${f.name}: HTTP ${r.status}`);
      await fs.writeFile(target, Buffer.from(await r.arrayBuffer()));
      done++;
    }
    console.log(`${slug.padEnd(28)} ${done}/${photos.length} photos (${a.files.length - photos.length} videos skipped)`);
  }
  console.log(`
Done.`);
}
