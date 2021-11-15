const path = require("path");

module.exports = ({ webpack }) => {
  // 因为实际开发的时候很多时候移动端和PC端呈现的内容有区别会做两套，此时只需要一个域名前端区分就行
  // 当然如果设计的时候会考虑多端的问题需要大家自行适配了
  // 记得如果要是有其他移动端组件非设计尺寸，也就是750，那么请在375处改掉
  // 双端：PC按照1920设计，Mobile按照750设计，但是实际开发需要将Mobile改为1920
  // 单端：PC为1920，Mobile为750
  const designWidth = webpack.resourcePath.includes(path.join("node_modules", "vant")) ? 375 : 1920;
  return {
    plugins: {
      // "postcss-import": {},
      // "postcss-url": {},
      "postcss-aspect-ratio-mini": {},
      "postcss-write-svg": {//移动端1px解决方案
        utf8: false
      },
      "postcss-px-to-viewport": {
        unitToConvert: "px", // 需要转换的单位，默认为"px"
        viewportWidth: designWidth, // 设计稿的视口宽度
        // viewportHeight: 1334, //视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置。
        unitPrecision: 3, // 单位转换后保留的精度
        propList: ["*", "!letter-spacing"], // 能转化为vw的属性列表
        viewportUnit: "vw", // 希望使用的视口单位
        fontViewportUnit: "vw", // 字体使用的视口单位
        selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
        minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
        mediaQuery: false, // 媒体查询里的单位是否需要转换单位
        replace: true, // 是否直接更换属性值，而不添加备用属性
        exclude: /(\/|\\)(node_modules)(\/|\\)/i, // 忽略某些文件夹下的文件或特定文件
        // include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 "src/mobile" 下的文件 (include: /\/src\/mobile\//)
        landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
        landscapeUnit: "vw", // 横屏时使用的单位
        landscapeWidth: 568 // 横屏时使用的视口宽度
      },
      "postcss-viewport-units": {}, //给css添加content的属性，配合viewport-units-buggyfill库解决适配问题
      // "cssnano": {
      //   preset: "advanced",
      //   autoprefixer: false,
      //   "postcss-zindex": false
      // }
    },
  }
};
