// One-off helper: converts the raw photos in IMG_TO_ADD/<folder> (and the old
// gallery) into web-sized JPEGs under public/images/projects/<slug>/ and writes
// a manifest with the final dimensions to src/data/project-images.json.
//
// Usage:  node scripts/optimize-images.mjs
//
// Add a new project by adding an entry to SOURCES below and re-running.
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'images', 'projects');
const MANIFEST = path.join(ROOT, 'src', 'data', 'project-images.json');

const MAX_EDGE = 2000; // longest side in px
const QUALITY = 80;

// slug -> source folder (relative to repo root)
const SOURCES = {
  banesa: 'IMG_TO_ADD/Banesa',
  'coffee-house-zenn': 'IMG_TO_ADD/coffee-house-zenn_-SaintLouiseFrance',
  'luzern-penthouse': 'IMG_TO_ADD/luzern-Switzerland-penthouse',
  'other-works': 'public/images/gallery',
};

const IMAGE_RE = /\.(jpe?g|png|webp|heic)$/i;

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

async function processFolder(slug, srcDir) {
  const absSrc = path.join(ROOT, srcDir);
  const outDir = path.join(OUT_DIR, slug);
  await fs.mkdir(outDir, { recursive: true });

  const files = (await fs.readdir(absSrc)).filter((f) => IMAGE_RE.test(f)).sort(naturalSort);
  const entries = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const name = `${String(i + 1).padStart(2, '0')}.jpg`;
    const outPath = path.join(outDir, name);

    const { info } = await sharp(path.join(absSrc, file))
      .rotate() // apply EXIF orientation
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer({ resolveWithObject: true })
      .then(async ({ data, info }) => {
        await fs.writeFile(outPath, data);
        return { info };
      });

    entries.push({ src: `/images/projects/${slug}/${name}`, width: info.width, height: info.height });
    process.stdout.write(`${slug}/${name}  <- ${file}  (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB)\n`);
  }
  return entries;
}

const manifest = {};
for (const [slug, srcDir] of Object.entries(SOURCES)) {
  manifest[slug] = await processFolder(slug, srcDir);
}
await fs.mkdir(path.dirname(MANIFEST), { recursive: true });
await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`\nWrote ${MANIFEST}`);
