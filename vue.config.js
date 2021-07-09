const path = require('path')
const resolve = dir => path.join(__dirname, dir)
// js压缩混淆
const UglifyPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  runtimeCompiler: false,
  // 默认情况下babel-loader忽略其中的所有文件node_modules。
  transpileDependencies: [],
  // 生产环境sourceMap
  productionSourceMap: false,
  /*
   *webpack配置利用splitChunks将每个依赖包单独打包，在生产环境下配置
   */
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
      // 将每个依赖包打包成单独的js文件
      const optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000, // 依赖包超过20000bit将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name (module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        },
        /* 新版uglifyjs-webpack-plugin需写成以下方式 */
        minimizer: [
          new UglifyPlugin({
            uglifyOptions: {
              warnings: false,
              compress: {
                drop_console: true, // console
                drop_debugger: false,
                pure_funcs: ['console.log'] // 移除console
              }
            }
          })
        ]
      }
      Object.assign(config, {
        optimization
      })
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
  },
  // 添加别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('utils', resolve('src/utils'))
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: true,
    modules: false,
    sourceMap: false,
    loaderOptions: {}
  },
  // webpack-dev-server 相关配置
  devServer: {
    // 设置代理
    hot: true, // 热加载
    host: '0.0.0.0', // ip地址
    port: 8080, // 端口号
    https: false, // 关闭https
    open: 'Google Chrome', // 自动打开固定浏览器
    hotOnly: false,
    proxy: null
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  pwa: {}
}
