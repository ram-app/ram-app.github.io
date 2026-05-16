/**
 * Canonical site origin (no path, no trailing slash).
 * This is what `metadataBase` in `app/layout.tsx` should use — NOT your image URL.
 *
 * Set `NEXT_PUBLIC_SITE_URL` in CI or `.env.local` if production differs
 * (e.g. `https://ram-app.github.io`).
 */
const raw =
  typeof process.env.NEXT_PUBLIC_SITE_URL === 'string' &&
  process.env.NEXT_PUBLIC_SITE_URL.length > 0
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://ram-surat.dev';

export const siteUrl = raw.replace(/\/$/, '');

export function absoluteUrl(path: string) {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${p}`;
}

/**
 * Social preview image: keep the file in `/public` next to this repo.
 * Local path: `public/Gemini_Generated_Image_ghxrhkghxrhkghxr.png`
 * Live URL:    `{siteUrl}/Gemini_Generated_Image_ghxrhkghxrhkghxr.png`
 * e.g.         `https://ram-surat.dev/Gemini_Generated_Image_ghxrhkghxrhkghxr.png`
 *
 * In Next.js metadata, you can pass this path as `url` on `openGraph.images`
 * together with `metadataBase: new URL(siteUrl)` — Next resolves the full URL.
 */
export const OG_IMAGE_PATH =
  '/Gemini_Generated_Image_ghxrhkghxrhkghxr.png' as const;

/** Absolute OG image URL (for JSON-LD, manual meta tags, sharing debuggers). */
export const ogImageAbsoluteUrl = absoluteUrl(OG_IMAGE_PATH);

/** Preferred size for OG hints; change if your PNG dimensions differ. */
export const defaultOgImage = {
  url: ogImageAbsoluteUrl,
  width: 1200,
  height: 630,
  type: 'image/png',
} as const;
