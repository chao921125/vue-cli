module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7', "Chrome > 31", "ff > 31", "ie >= 7"]
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      unitPrecision: 5,
      propList: ['*'],
      // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
      //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
      selectorBlackList: ['.pc'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules|pc/i
    }
  },
};
