// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'The HyDE project',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        es: { label: 'Español', lang: 'es' },
        de: { label: 'Deutsch', lang: 'de' },
        nl: { label: 'Nederlands', lang: 'nl' },
        zh: { label: '中文', lang: 'zh' },
        fr: { label: 'Français', lang: 'fr' },
      },
      social: {
        github: 'https://github.com/HyDE-Project',
        discord: 'https://discord.gg/8nWbDC4SnP',
      },
      sidebar: [
        {
          label: 'Start Here',
          autogenerate: {directory: 'start_here'},
        },
        {
          label: 'Guides',
          autogenerate: {directory: 'guides'},
        },
        {
          label: 'Installation & Management',
          autogenerate: {directory: 'installation_management'},
        },
        {
          label: 'Configuration',
          autogenerate: {directory: 'configuration'},
        },
        {
          label: 'Theming',
          autogenerate: {directory: 'themes'},
        },
        {
          label: 'Extensions',
          autogenerate: {directory: 'extensions'},
        },
        {
          label: 'Reference',
          items: [{label: 'FAQs', slug: 'reference/faqs'}],
        },
      ],
    }),
  ],
});
