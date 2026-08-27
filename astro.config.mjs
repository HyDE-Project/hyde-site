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
          translations: {
            fr: 'Commencer', es: 'Empezando', zh: '入门指南', de: 'Erste Schritte',
            hi: 'शुरू करें', ru: 'Начало работы', id: 'Memulai', uk: 'Початок роботи',
          },
          items: [{autogenerate: {directory: 'getting-started'}}],
        },
        {
          label: '🛠️ Configuring',
          translations: {
            fr: 'Configuration', es: 'Configuración', zh: '配置', de: 'Konfiguration',
            hi: 'कॉन्फ़िगरेशन', ru: 'Настройка', id: 'Konfigurasi', uk: 'Налаштування',
          },
          items: [{autogenerate: {directory: 'configuring'}}],
        },
        {
          label: '📙 Man Pages',
          translations: {
            fr: 'Pages de manuel', es: 'Páginas de manual', zh: '命令手册', de: 'Man-Pages',
            hi: 'मैन पेज', ru: 'Man-страницы', id: 'Halaman Man', uk: 'Man-сторінки',
          },
          items: [{autogenerate: {directory: 'man-pages'}}],
        },
        {
          label: '🎨 Theming',
          translations: {
            fr: 'Thèmes', es: 'Temas', zh: '主题', de: 'Themes',
            hi: 'थीमिंग', ru: 'Темы оформления', id: 'Tema', uk: 'Теми оформлення',
          },
          items: [{autogenerate: {directory: 'theming'}}],
        },
        {
          label: '📚 Resources',
          translations: {
            fr: 'Ressources', es: 'Recursos', zh: '资源', de: 'Ressourcen',
            hi: 'संसाधन', ru: 'Ресурсы', id: 'Sumber Daya', uk: 'Ресурси',
          },
          items: [{autogenerate: {directory: 'resources'}}],
        },
        {
          label: '👥 Help',
          translations: {
            fr: 'Aide', es: 'Ayuda', zh: '帮助', de: 'Hilfe',
            hi: 'सहायता', ru: 'Помощь', id: 'Bantuan', uk: 'Допомога',
          },
          items: [{autogenerate: {directory: 'help'}}],
        }
      ],
    }),
  ],
});
