// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // 全局变量
  'globals': {
    'document': true,
    '$': false, // 全局变量不能被改写
    'jQuery': false,
  },
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['off', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'import/no-unresolved': [0, {commonjs: true, amd: true}],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'max-len': [1, 30000], // 强制行的最大长度 (max-len)
    'linebreak-style': 0, // 忽略换行符格式不一样
    'no-console': 0, // 忽略console日志警告
    'no-param-reassign': 0, // 忽略函数参数的修改报错
    'no-plusplus': 0, // 忽略使用自增自减运算符报错
    'no-unused-expressions': 0, // 忽略只写表达式报错
  }
}
