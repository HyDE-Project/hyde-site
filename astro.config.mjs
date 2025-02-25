// @ts-check
import starlight from '@astrojs/starlight';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'The HyDE project',
      social: {
        github: 'https://github.com/HyDE-Project',
        discord: 'https://discord.gg/8nWbDC4SnP',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Get Started', slug: '/guides/getting-started'},
            { label: 'NVIDIA', slug: '/guides/nvidia'},
            // {label: 'Configuration', slug: 'guides/configuration'},
          ],
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
          items: [
            { label: 'Making Themes', slug: 'themes/making-themes' },
            {
              label: 'Theme Gallery',
              autogenerate: { directory: 'themes/hyde-gallery' }
            }
          ]
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
