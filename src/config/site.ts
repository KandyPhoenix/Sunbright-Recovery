/**
 * One place for the facts every full-site page repeats.
 * Change a value here, not in each page.
 */
export const SITE = 'https://www.sunbrightrecovery.org';
export const SITE_NAME = 'Sunbright Recovery Center';

/** Main SRC line (set 2026-09-18, SBR-33). Never reintroduce the old PHW or personal numbers. */
export const PHONE_DISPLAY = '(530) 513-4294';
export const PHONE_TEL = '+15305134294';
export const PHONE_SCHEMA = '+1-530-513-4294';
export const EMAIL = 'info@sunbrightrecovery.org';

export const ADDRESS = {
  street: '22425 Sunbright Ave',
  city: 'Red Bluff',
  region: 'CA',
  postalCode: '96080',
  country: 'US',
};

/**
 * PRELAUNCH = true keeps every full-site page noindex, nofollow.
 * Flip to false ONLY after the December DHCS site visit and Kandy's yes.
 * See seo/launch-checklist.md.
 */
export { PRELAUNCH } from './launch.mjs';

/**
 * GA4 Measurement ID (G-XXXXXXXXXX). Read from the PUBLIC_GA4_ID environment
 * variable so it can be set on Cloudflare Pages "Production" only, keeping
 * preview builds out of the analytics data. Empty = no tag is output.
 */
export const GA4_ID: string = (import.meta.env.PUBLIC_GA4_ID ?? '').trim();

/** Absolute, trailing-slash URL for a path, matching the sitemap and Cloudflare's /about -> /about/ redirect. */
export function absUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  let p = path.startsWith('/') ? path : '/' + path;
  const [base, hash = ''] = p.split('#');
  let b = base;
  if (!b.endsWith('/') && !/\.[a-z0-9]+$/i.test(b)) b += '/';
  return SITE + b + (hash ? '#' + hash : '');
}

/**
 * HSC 11831.12 (SB 541, eff. 1/1/2022): a DHCS-licensed facility's website must show,
 * clearly and conspicuously, "Licensed by the State Department of Health Care Services."
 * with a link to the DHCS page that shows its license number and expiration date.
 * Paste that DHCS page URL here before launch. Until it is set, the footer shows the
 * statement without a link and the launch checklist stays open.
 */
export const DHCS_LICENSE_URL = '';
