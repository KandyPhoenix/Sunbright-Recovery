import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { PRELAUNCH, FULL_SITE_PATHS } from './src/config/launch.mjs';

const NEVER_IN_SITEMAP = ['/admin', '/draft', '/admissions-preview', '/design-preview', '/index-v2', '/community', '/thank-you', '/404', '/launch-home'];

export default defineConfig({
  site: 'https://www.sunbrightrecovery.org',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        if (NEVER_IN_SITEMAP.some((p) => path.startsWith(p))) return false;
        if (PRELAUNCH && FULL_SITE_PATHS.some((p) => path.startsWith(p))) return false;
        return true;
      },
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
