import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title:"我的技术知识库",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text:"Linux",link:"/Linux/"},
      {text:"C++",link:"/C++/"}
    ],

    sidebar: {


"/Linux/":[

{

text:"Linux环境",

items:[

{
text:"C++环境搭建",
link:"/Linux/cpp-environment"
},


{
text:"Python环境搭建",
link:"/Linux/python-environment"
}

]

}

]


},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
