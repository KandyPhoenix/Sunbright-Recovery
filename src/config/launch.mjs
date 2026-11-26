// Launch switch, shared by astro.config.mjs (sitemap) and src/config/site.ts (noindex).
// Keep true until the December DHCS site visit is done AND Kandy says yes.
export const PRELAUNCH = true;

// Full-site (post-licensing) routes. Left out of the sitemap while PRELAUNCH is true.
export const FULL_SITE_PATHS = [
  '/admissions', '/donate', '/family-resources', '/faqs', '/insurance', '/our-approach',
  '/programs', '/team', '/tour', '/what-we-treat', '/launch-home',
];
