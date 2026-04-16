#!/usr/bin/env node
/**
 * Google Imagen 3 batch image generator
 *
 * Reads prompts list, calls Imagen 3 API, saves JPGs to public/images/.
 *
 * Usage:
 *   node scripts/generate-images.js              # generate all missing
 *   node scripts/generate-images.js --force      # regenerate all
 *   node scripts/generate-images.js blog-typography  # one slug
 *
 * Requires: Node 18+ (native fetch). Reads GOOGLE_IMAGEN_API_KEY from
 * fontsfun-web/.env.local (auto-loaded).
 */

const fs = require('node:fs');
const path = require('node:path');

// ── Load .env.local manually (no dotenv dep) ──
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (!fs.existsSync(envPath)) return;
  const txt = fs.readFileSync(envPath, 'utf-8');
  for (const line of txt.split('\n')) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}
loadEnv();

const API_KEY = process.env.GOOGLE_IMAGEN_API_KEY;
if (!API_KEY) {
  console.error('✗ GOOGLE_IMAGEN_API_KEY missing in .env.local');
  process.exit(1);
}

// ── Style guide (Japanese editorial aesthetic) ──
const STYLE_BASE =
  'Japanese editorial photography aesthetic, clean composition with generous negative space, ' +
  'soft natural light, premium quality, warm cream and pale gold tones, ' +
  'minimalist refined elegance, shot on Hasselblad, magazine-quality';

// ── Image specs ──
const IMAGES = [
  {
    slug: 'blog-typography',
    aspect: '16:9',
    out: 'public/images/blog/blog-typography.jpg',
    prompt:
      'Extreme close-up macro photograph of traditional Chinese calligraphy practice ' +
      'on textured washi paper, elegant flowing brush strokes in deep black sumi ink, ' +
      'visible paper fiber texture, cream and warm beige tones, soft window light from left, ' +
      'no text, no characters readable, just abstract ink strokes. ' + STYLE_BASE,
  },
  {
    slug: 'blog-brand',
    aspect: '16:9',
    out: 'public/images/blog/blog-brand.jpg',
    prompt:
      'Top-down flat lay photograph of brand identity designer workspace: ' +
      'Japanese calligraphy brushes, ceramic ink stone, color swatch cards in cream and gold, ' +
      'blank business cards mockup, natural linen napkin, on warm walnut wood desk, ' +
      'soft diffused window light, no text or logos visible. ' + STYLE_BASE,
  },
  {
    slug: 'blog-case',
    aspect: '16:9',
    out: 'public/images/blog/blog-case.jpg',
    prompt:
      'Minimalist Japanese-style cultural exhibition gallery interior, ' +
      'pristine white plaster walls, polished concrete floor, ' +
      'three framed monochrome prints sparsely hung, soft warm overhead spotlights, ' +
      'wooden bench in foreground, golden afternoon light, no people, no readable text. ' +
      STYLE_BASE,
  },
  {
    slug: 'blog-font',
    aspect: '16:9',
    out: 'public/images/blog/blog-font.jpg',
    prompt:
      'Close-up still life of typography design process: ' +
      'pencil sketches of abstract letterform shapes on tracing paper, ' +
      'vintage brass magnifying glass on top, wooden ruler beside, ' +
      'all on warm cream background, soft natural light from upper left, ' +
      'no readable letters or words. ' + STYLE_BASE,
  },
  {
    slug: 'hero-portfolio',
    aspect: '16:9',
    out: 'public/images/hero-portfolio.jpg',
    prompt:
      'Atmospheric interior photograph of a refined designer atelier studio: ' +
      'warm pendant lights with soft amber glow, floor-to-ceiling oak bookshelves ' +
      'filled with art books, large wooden drafting desk in foreground with scattered sketches, ' +
      'late golden-hour sunlight streaming through tall windows, ' +
      'cinematic depth of field, creamy beige and amber color palette, no people. ' + STYLE_BASE,
  },
  {
    slug: 'hero-fonts',
    aspect: '16:9',
    out: 'public/images/hero-fonts.jpg',
    prompt:
      'Macro close-up of vintage letterpress metal type characters arranged on a wooden ' +
      'composing tray, warm brass and bronze metallic tones reflecting soft amber light, ' +
      'shallow depth of field with foreground type sharp and background blurred, ' +
      'on dark walnut surface, premium product photography, no readable letters. ' + STYLE_BASE,
  },
  {
    slug: 'specimen-miantian',
    aspect: '4:3',
    out: 'public/images/specimen-miantian.jpg',
    prompt:
      'Soft dreamy still-life photograph of pale cream Japanese wagashi sweets ' +
      'and a piece of pastel pink cotton candy on a beige ceramic plate, ' +
      'top-down composition, fresh raspberries scattered, gentle natural diffused light, ' +
      'powder pink and cream color palette, generous negative space around subject, ' +
      'shallow depth of field, no text or labels. ' + STYLE_BASE,
  },
];

// ── Imagen 4 REST endpoint (Google Generative Language API) ──
// Available models with this key: imagen-4.0-generate-001 / -ultra- / -fast-
const MODEL = process.env.IMAGEN_MODEL || 'imagen-4.0-generate-001';
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict`;

async function generateOne(spec) {
  const url = `${ENDPOINT}?key=${API_KEY}`;
  const body = {
    instances: [{ prompt: spec.prompt }],
    parameters: {
      sampleCount: 1,
      aspectRatio: spec.aspect,
      personGeneration: 'dont_allow',
      safetyFilterLevel: 'block_only_high',
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`HTTP ${res.status} ${res.statusText}\n${errText}`);
  }
  const json = await res.json();
  const pred = json.predictions?.[0];
  const b64 =
    pred?.bytesBase64Encoded || pred?.bytesBase64 || pred?.image?.bytesBase64Encoded;
  if (!b64) {
    throw new Error(
      `Unexpected response shape:\n${JSON.stringify(json, null, 2).slice(0, 800)}`
    );
  }
  return Buffer.from(b64, 'base64');
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const slugFilter = args.find((a) => !a.startsWith('--'));

  const targets = slugFilter
    ? IMAGES.filter((i) => i.slug === slugFilter)
    : IMAGES;

  if (targets.length === 0) {
    console.error(`✗ no image matched slug "${slugFilter}"`);
    process.exit(1);
  }

  const root = path.join(__dirname, '..');
  const results = { ok: [], skip: [], fail: [] };

  for (const spec of targets) {
    const outPath = path.join(root, spec.out);
    if (!force && fs.existsSync(outPath)) {
      console.log(`◌ skip (exists): ${spec.slug}`);
      results.skip.push(spec.slug);
      continue;
    }

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    process.stdout.write(`→ ${spec.slug.padEnd(20)} (${spec.aspect}) ... `);
    const t0 = Date.now();
    try {
      const buf = await generateOne(spec);
      fs.writeFileSync(outPath, buf);
      const ms = Date.now() - t0;
      const kb = (buf.length / 1024).toFixed(0);
      console.log(`✓ ${kb}KB in ${(ms / 1000).toFixed(1)}s`);
      results.ok.push(spec.slug);
    } catch (e) {
      console.log(`✗ FAILED`);
      console.error(`   ${e.message.split('\n').slice(0, 6).join('\n   ')}`);
      results.fail.push({ slug: spec.slug, err: e.message });
      // stop at first hard failure so quota / auth issues don't burn through batch
      if (/401|403|API key|PERMISSION_DENIED|UNAUTHENTICATED/i.test(e.message)) {
        console.error('\n⚠ Auth/permission error — stopping batch.');
        break;
      }
    }
  }

  console.log('\n── Summary ──');
  console.log(`  ✓ generated: ${results.ok.length}`);
  console.log(`  ◌ skipped:   ${results.skip.length}`);
  console.log(`  ✗ failed:    ${results.fail.length}`);
  if (results.fail.length) process.exit(1);
}

main().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
