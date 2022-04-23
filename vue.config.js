const webpack = require('webpack')
// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'
// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 本地环境是否需要使用cdn
const devNeedCdn = false
// cdn链接
const cdn = {
    // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
    externals: {
        // 'vue': 'Vue',
        // 'vuex': 'Vuex',
        // "element-plus": "ElementPlus",
        // 'vue-router': 'VueRouter',
        // 'axios': 'axios',
        // 'jquery': '$',
        // 'Qs': 'Qs',
        // 'wangEditor' : 'wangEditor'
    },
    // cdn的css链接
    css: [
        // 'https://unpkg.com/element-plus@2.0.4/dist/index.css',
        // 'https://unpkg.com/animate.css@4.1.1/animate.css',
        // 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css'
    ],
    // cdn的js链接
    js: [
        // 'https://unpkg.com/vue@3.2.31/dist/vue.global.js',
        // 'https://unpkg.com/vuex@4.0.2/dist/vuex.global.js',
        // 'https://unpkg.com/jquery@3.6.0/dist/jquery.js',
        // 'https://unpkg.com/element-plus@2.0.4/dist/index.full.js',
        // 'https://unpkg.com/vue-router@4.0.13/dist/vue-router.global.js',
        // 'https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js',
        // 'https://cdn.jsdelivr.net/npm/qs@6.10.3/dist/qs.js',
        // 'https://unpkg.com/wangeditor@4.7.12/dist/wangEditor.min.js'
    ]
}
 
module.exports = {
    devServer:{
        port: 80
    },
    lintOnSave: false,
    publicPath: '/',
    productionSourceMap: false,
    chainWebpack: config => {
        // ============注入cdn start============
        config.plugin('html').tap(args => {
            // 生产环境或本地需要cdn时，才注入cdn
            if (isProduction || devNeedCdn) args[0].cdn = cdn
            return args
        })
    },
    configureWebpack: config => {
        // 用cdn方式引入，则构建时要忽略相关资源
        if (isProduction || devNeedCdn) config.externals = cdn.externals
        // 生产环境相关配置
        if (isProduction) {
            //gzip压缩
            const productionGzipExtensions = ['html', 'js', 'css']
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path][base].gz',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.7, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            )
            // 代码压缩
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        //生产环境自动删除console
                        compress: {
                            drop_debugger: true,
                            drop_console: true,
                            pure_funcs: ['console.log']
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            )
            config.plugins.push(
                new webpack.ProvidePlugin({
                    $:"jquery",
                    jQuery:"jquery",
                    "windows.jQuery":"jquery"
                })
            )
        }
        // 公共代码抽离
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'all',
                        test: /node_modules/,
                        name: 'vendor',
                        minChunks: 1,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 100
                    },
                    common: {
                        chunks: 'all',
                        test: /[\\/]src[\\/]js[\\/]/,
                        name: 'common',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 60
                    },
                    styles: {
                        name: 'styles',
                        test: /\.(sa|sc|c)ss$/,
                        chunks: 'all',
                        enforce: true
                    },
                    runtimeChunk: {
                        name: 'manifest'
                    }
                }
            }
        }
    }
}