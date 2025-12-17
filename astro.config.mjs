import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({
      compat: true,  // Enable React compatibility mode
      include: ['**/preact/*']  // Only use Preact for files in preact folders
    }),
    react({
      include: ['**/react/*', '**/components/*']  // Use React for components
    })
  ]
});
