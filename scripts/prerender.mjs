import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { projects } from '../src/data/projects.js';
import { getProjectMeta, HOME_META, SITE_URL } from '../src/lib/seoConfig.js';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = join(projectRoot, 'dist');
const template = await readFile(join(distRoot, 'index.html'), 'utf8');

function escapeAttribute(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('"', '&quot;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
}

function escapePattern(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceMeta(html, attribute, key, content) {
    const pattern = new RegExp(
        `<meta\\b(?=[^>]*\\b${escapePattern(attribute)}=["']${escapePattern(key)}["'])[^>]*>`,
        'i',
    );

    if (!pattern.test(html)) {
        throw new Error(`Missing ${attribute}="${key}" in built index.html`);
    }

    return html.replace(
        pattern,
        `<meta ${attribute}="${escapeAttribute(key)}" content="${escapeAttribute(content)}" />`,
    );
}

function renderPage(meta) {
    const imageUrl = meta.image.startsWith('http') ? meta.image : `${SITE_URL}${meta.image}`;
    const canonicalUrl = `${SITE_URL}${meta.path}`;
    const structuredData = JSON.stringify(meta.structuredData, null, 2).replaceAll('<', '\\u003c');

    let html = template.replace(
        /<title>[\s\S]*?<\/title>/i,
        `<title>${escapeAttribute(meta.title)}</title>`,
    );

    html = replaceMeta(html, 'name', 'description', meta.description);
    html = replaceMeta(html, 'name', 'robots', meta.robots);
    html = replaceMeta(html, 'property', 'og:title', meta.title);
    html = replaceMeta(html, 'property', 'og:description', meta.description);
    html = replaceMeta(html, 'property', 'og:type', meta.type);
    html = replaceMeta(html, 'property', 'og:url', canonicalUrl);
    html = replaceMeta(html, 'property', 'og:image', imageUrl);
    html = replaceMeta(html, 'name', 'twitter:title', meta.title);
    html = replaceMeta(html, 'name', 'twitter:description', meta.description);
    html = replaceMeta(html, 'name', 'twitter:image', imageUrl);
    html = html.replace(
        /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i,
        `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}" />`,
    );
    html = html.replace(
        /<script\b(?=[^>]*\bid=["']structured-data["'])[^>]*>[\s\S]*?<\/script>/i,
        `<script id="structured-data" type="application/ld+json">\n${structuredData}\n  </script>`,
    );

    return html;
}

await writeFile(join(distRoot, 'index.html'), renderPage(HOME_META), 'utf8');

for (const project of projects) {
    const outputPath = join(distRoot, 'project', project.id, 'index.html');
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, renderPage(getProjectMeta(project)), 'utf8');
}

console.log(`Prerendered ${projects.length} project pages.`);
