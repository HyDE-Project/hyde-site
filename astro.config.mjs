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
            // { label: 'Introduction', slug: 'index' },
            { label: 'First Steps', slug: 'getting-started' },
          ],
        },
        {
          label: '🌟 Features',
          items: [
            { label: 'HyDE CLI', slug: 'features/cli' },
            { label: 'HyDE Gallery', slug: 'features/gallery' },
            { label: 'HyprPanel', slug: 'features/hyprpanel' },
            { label: 'NVIDIA Support', slug: 'features/nvidia' },
          ],
        },
        {
          label: '⚙️ Installation',
          items: [
            { label: 'HyDE Setup', slug: 'installation/hyde' },
            { label: 'Updating', slug: 'installation/updating' },
            { label: 'Restore Configuration', slug: 'installation/restore' },
          ],
        },
        {
          label: '🛠️ Configuration',
          items: [
            { label: 'Hyprland', slug: 'configuration/hyprland' },
          ],
        },
        {
          label: '🎨 Customization',
          items: [
            { label: 'Creating Themes', slug: 'customization/making-themes' },
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
            { label: 'Tools & References', slug: 'resources/tools' },
          ],
        },
      ],
    }),
  ],
});
