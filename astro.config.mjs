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
            {label: 'Get Started', slug: 'guides/getting-started'},
            {label: 'NVIDIA', slug: 'hyde/nvidia'},
            // {label: 'Configuration', slug: 'guides/configuration'},
          ],
        },
        {
          label: 'Installation & Management',
          autogenerate: {directory: 'hyde/installation_management'},
        },
        {
          label: 'Configuration',
          autogenerate: {directory: 'hyde/configuration'},
        },
        {
          label: 'Theming',
          autogenerate: {directory: 'hyde-gallery'},
        },
        {
          label: 'Extended',
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
