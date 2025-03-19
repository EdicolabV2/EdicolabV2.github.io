// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Edicolab',
  favicon: 'img/logo-.png',

  // Set the production url of your site here
  url: 'https://EdicolabV2.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EdicolabV2', // Usually your GitHub org/user name.
  projectName: 'EdicolabV2.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },

      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Edicolab',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-.png',
          style: {
            width: '60px',
            height: 'auto',
            //centering the logo
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '-12px',
          },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/EdicolabV2/EdicolabV2.github.io',
            label: 'GitHub',
            position: 'right',
          },
          { to: '/milestones', label: 'Milestones', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `
        <div style="display: flex; width:100%">
          <div style="text-align: left; width:100%">
            <strong>EDICOLAB</strong><br>
            Project in Informatics<br>
            Degree in Informatics Engineering<br>
          </div>
          <div style="text-align: right; width:100%">
            <br>
            Department of Electronics, Telecommunications and Informatics<br>
            University of Aveiro<br><br>
          </div>
        </div>
        `,
      },
    }),
};

export default config;