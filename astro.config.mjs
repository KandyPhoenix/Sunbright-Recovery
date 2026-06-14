import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sunbrightrecovery.org',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      // Exclude staging/preview routes and the pre-launch community stopgap.
      // The production homepage is promoted from design-preview at launch.
      filter: (page) => {
        const staging = [
          '/admin', '/draft',
          '/design-preview', '/design-preview-v5', '/design-preview-no-greenery',
          '/index-v2', '/admissions-preview', '/community',
        ];
        return !staging.some((s) => page.includes(s));
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
