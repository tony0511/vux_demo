'use strict'

// const path = require('path')
// const fs = require('fs')
// const demoPath = path.resolve(__dirname, '../src/demo_list.json')

// const argv = require('yargs').argv
// argv.simulate = argv.simulate || false

module.exports = {
  // options: {
  //   vuxDev: !argv.simulate, // true
  //   vuxSetBabel: argv.simulate, // false
  //   vuxWriteFile: false,
  //   env: 'dev'
  // },
  plugins: [
    'vux-ui', // 配合babel-loader以正确编译VUX的js源码
    'progress-bar',
    'duplicate-style', // 在构建后去除重复css代码
    // {
    //   name: 'duplicate-style',
    //   envs: ['production']
    // },
    // {
    //   name: 'progress-bar',
    //   envs: ['development']
    // },
    // {
    //   name: 'js-parser',
    //   test: /main\.js/,
    //   fn: function (source) {
    //     this.addDependency(demoPath)
    //     let list = fs.readFileSync(demoPath, 'utf-8')
    //     list = JSON.parse(list)
    //     if (argv.demo) {
    //       list = list.filter(item => {
    //         return item.indexOf(argv.demo) > -1
    //       })
    //     }
    //     let str = []
    //     list.forEach(one => {
    //       let filename = one
    //       let path = `/component/${toDash(one)}`
    //       if (/#/.test(one)) {
    //         filename = one.split('#')[0]
    //         path = one.split('#')[1]
    //       }
    //       str.push(`{
    //         path: '${path}',
    //         component: () => import('./demos/${filename}.vue').then(m => m.default)
    //       }`)
    //     })

    //     // 404 page
    //     str.push(`{
    //       path: '*',
    //       component: () => import('./demos/NotFoundComponent.vue').then(m => m.default)
    //     }`)

    //     str = `[${str.join(',\n')}]`
    //     source = source.replace('const routes = []', 'const routes = ' + str)
    //     return source
    //   }
    // },
    {
      name: 'i18n', // i18n插件
      vuxStaticReplace: false,
      staticReplace: false,
      extractToFiles: 'src/locales/components.yml', // 组件中的语言类型代码编译后会统一集中到该文件中
      localeList: ['en', 'zh-CN'], // 语言类型种类
    },
    // {
    //   name: 'less-theme',
    //   path: 'src/theme.less'
    // }
  ]
}

// function toDash(str) {
//   return str.replace(/([A-Z])/g, function (m, w) {
//     return '-' + w.toLowerCase();
//   }).replace('-', '')
// }