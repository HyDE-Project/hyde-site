// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'The HyDE Project',
      customCss: [
        // Path to our custom CSS file
        './src/styles/custom.css',
      ],
      components: {
        LanguageSelect: './src/components/LanguageSelect.astro',
      },
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
        es: { label: 'Español', lang: 'es' },
        zh: { label: '简体中文', lang: 'zh' },
        de: { label: 'Deutsch', lang: 'de' },
        hi: { label: 'हिन्दी', lang: 'hi' },
        ru: { label: 'Русский', lang: 'ru'},
        id: { label: 'Bahasa Indonesia', lang: 'id'},
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/HyDE-Project',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/8nWbDC4SnP',
        },
      ],
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
