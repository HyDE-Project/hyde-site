// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'The HyDE project',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
        es: { label: 'Español', lang: 'es' },
        zh: { label: '简体中文', lang: 'zh' },
        de: { label: 'Deutsch', lang: 'de' },
        hi: { label: 'हिन्दी', lang: 'hi' },
      },
      social: {
        github: 'https://github.com/HyDE-Project',
        discord: 'https://discord.gg/8nWbDC4SnP',
      },
      sidebar: [
        {
          label: '🚀 Getting Started',
          autogenerate: {directory: 'getting-started'},
        },
        {
          label: '🛠️ Configuring',
          autogenerate: {directory: 'configuring'},
        },
        {
          label: '📙 Man Pages',
          autogenerate: {directory: 'man-pages'},
        },
        {
          label: '🎨 Theming',
          autogenerate: {directory: 'theming'},
        },
        {
          label: '📚 Resources',
          autogenerate: {directory: 'resources'}
        },
        {
          label: '👥 Help',
          autogenerate: {directory: 'help'}
        }
      ],
    }),
  ],
});
