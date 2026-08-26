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
        uk: { label: 'Українська', lang: 'uk'},
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
          items: [{autogenerate: {directory: 'getting-started'}}],
        },
        {
          label: '🛠️ Configuring',
          items: [{autogenerate: {directory: 'configuring'}}],
        },
        {
          label: '📙 Man Pages',
          items: [{autogenerate: {directory: 'man-pages'}}],
        },
        {
          label: '🎨 Theming',
          items: [{autogenerate: {directory: 'theming'}}],
        },
        {
          label: '📚 Resources',
          items: [{autogenerate: {directory: 'resources'}}],
        },
        {
          label: '👥 Help',
          items: [{autogenerate: {directory: 'help'}}],
        }
      ],
    }),
  ],
});
