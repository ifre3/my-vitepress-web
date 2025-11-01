import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "遗落奇遇",
  description: "欢迎来到遗落奇遇的个人空间",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // 关闭侧边栏
    sidebar: false,

    // 关闭社交链接
    socialLinks: []
  }
})
