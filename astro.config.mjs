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
          label: '🚀 Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Update', slug: 'getting-started/update' },
          ],
        },
        {
          label: '🌟 Features',
          items: [
            { label: 'HyDE CLI', slug: 'features/cli' },
            { label: 'HyprPanel', slug: 'features/hyprpanel' },
          ],
        },
        {
          label: '🛠️ Configuring',
          items: [
            { label: 'Hyprland', slug: 'configuring/hyprland' },
            { label: 'Restore Configuration', slug: 'configuring/restore' },
          ],
        },
        {
          label: '🎨 Theming',
          items: [
            { label: 'HyDE Gallery', slug: 'theming/gallery' },
            { label: 'Making Themes', slug: 'theming/making-themes' },
          ],
        },
        {
          label: '🧩 Extensions',
          items: [
            { label: 'SwayOSD', slug: 'extensions/swayosd' },
          ],
        },
        {
          label: '📚 Resources & Help',
          items: [
            { label: 'FAQ', slug: 'resources/faq' },
            { label: 'Roadmap', slug: 'resources/roadmap' },
            { label: 'NVIDIA Support', slug: 'resources/nvidia' },
            { label: 'Tools', slug: 'resources/tools' },
          ],
        },
      ],
    }),
  ],
});
