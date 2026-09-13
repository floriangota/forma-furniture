// Converts the raw photos in IMG_TO_ADD/<folder> into web-sized JPEGs under
// public/images/projects/<slug>/ and writes a manifest with the final
// dimensions to src/data/project-images.json.
//
// Usage:  node scripts/optimize-images.mjs            (all folders)
//         node scripts/optimize-images.mjs <slug>...   (only these slugs)
//
// Every sub-folder of IMG_TO_ADD is picked up automatically; its slug is the
// folder name in kebab-case. FOLDER_SLUGS below overrides the slug for folders
// whose names are messy. Existing manifest entries are kept for folders that
// are not present locally (so the script is safe to re-run on a fresh clone).
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC_DIR = path.join(ROOT, 'IMG_TO_ADD');
const OUT_DIR = path.join(ROOT, 'public', 'images', 'projects');
const MANIFEST = path.join(ROOT, 'src', 'data', 'project-images.json');

const MAX_EDGE = 2000; // longest side in px
const QUALITY = 80;

/** folder name -> slug overrides */
const FOLDER_SLUGS = {
  Banesa: 'banesa',
  'coffee-house-zenn_-SaintLouiseFrance': 'coffee-house-zenn',
  'luzern-Switzerland-penthouse': 'luzern-penthouse',
};

const IMAGE_RE = /\.(jpe?g|png|webp|heic)$/i;

function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

async function processFolder(slug, absSrc) {
  const outDir = path.join(OUT_DIR, slug);
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  const files = (await fs.readdir(absSrc)).filter((f) => IMAGE_RE.test(f)).sort(naturalSort);
  const entries = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const name = `${String(i + 1).padStart(2, '0')}.jpg`;
    const outPath = path.join(outDir, name);

    const { data, info } = await sharp(path.join(absSrc, file))
      .rotate() // apply EXIF orientation
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer({ resolveWithObject: true });
    await fs.writeFile(outPath, data);

    entries.push({ src: `/images/projects/${slug}/${name}`, width: info.width, height: info.height });
  }
  console.log(`${slug.padEnd(28)} ${String(entries.length).padStart(3)} photos`);
  return entries;
}

const only = new Set(process.argv.slice(2));
const manifest = JSON.parse(await fs.readFile(MANIFEST, 'utf8').catch(() => '{}'));

const folders = (await fs.readdir(SRC_DIR, { withFileTypes: true }))
  .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
  .map((d) => d.name)
  .sort(naturalSort);

for (const folder of folders) {
  const slug = FOLDER_SLUGS[folder] ?? slugify(folder);
  if (only.size && !only.has(slug)) continue;
  manifest[slug] = await processFolder(slug, path.join(SRC_DIR, folder));
}

// keep the old gallery photos (their source folder no longer exists)
await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`\nWrote ${MANIFEST} (${Object.keys(manifest).length} projects)`);
