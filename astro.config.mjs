import { defineConfig } from 'astro/config';
import deno from '@astrojs/deno';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: deno(),
});
