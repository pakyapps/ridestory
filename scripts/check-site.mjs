import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const pages = ['index.html', 'contacts/index.html', 'privacy/index.html', '404.html'];
const requiredFiles = [...pages, 'assets/styles.css', 'assets/site.js', 'assets/favicon.svg'];

for (const file of requiredFiles) await access(resolve(root, file));

for (const page of pages) {
  const html = await readFile(resolve(root, page), 'utf8');
  const localLinks = [...html.matchAll(/(?:href|src)="(\/[^"]+)"/g)].map((match) => match[1]);
  for (const link of localLinks) {
    const clean = link.split(/[?#]/)[0];
    if (!clean || clean === '/') continue;
    const target = clean.endsWith('/') ? `${clean.slice(1)}index.html` : clean.slice(1);
    await access(resolve(root, target));
  }
}

console.log(`Checked ${pages.length} pages and ${requiredFiles.length} required files.`);
