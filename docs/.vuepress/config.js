module.exports = {
  title: 'Quick App UI Components',
  base: '/qaui/',
  description:
    'Quick App UI is the official library of components of the Quick App Alliance, localized into English',
  plugins: [
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-feedback',
      {
        projectId: '161104887932449729',
        titleText:
          'Are you satisfied with your experience with the component library?',
        good: 'A variety of components, easy to use, clear and tidy UI, rich documents, and complete component interfaces',
        bad: 'Components are incomplete, complex to use, unsightly UI, unclear description in the document, and incomplete component interfaces.',
      },
    ],
  ],
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'Quick App Official UI component library development',
      },
    ],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-GNKRB7QBLL',
      },
    ],
    [
      'script',
      {},
      'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-GNKRB7QBLL");',
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 0,
    nav: [
      { text: 'Quick App Docs', link: 'https://doc.quickapp.cn' },
      { text: 'GitHub', link: 'https://github.com/quickappcn/qaui' },
    ],
    sidebar: [
      '/',
      {
        title: 'Basic Components',
        collapsable: false,
        children: [
          '/button',
          '/container',
          '/footer',
          '/title',
          '/icon',
          '/searchbar',
          '/divider',
          '/titlebar',
        ],
      },
      {
        title: 'Forms',
        collapsable: false,
        children: [
          '/calendar',
          '/vcode',
          '/checkbox',
          '/checkbox-group',
          '/filter',
          '/radio',
          '/radio-group',
          '/slider',
          '/input',
          '/textarea',
          '/switch',
        ],
      },
      {
        title: 'Feedback Display',
        collapsable: false,
        children: [
          '/page-error',
          '/popover',
          '/progress',
          '/page-result',
          '/notice',
        ],
      },
      {
        title: 'Data Display',
        collapsable: false,
        children: ['/collapse', '/gallery', '/list', '/steps'],
      },
      {
        title: 'Advanced Components',
        collapsable: false,
        children: ['/alphabet', '/desktop', '/tabs', '/tabbar', '/vtabs'],
      },
    ],
  },
}
