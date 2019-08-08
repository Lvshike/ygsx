module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    //lintOnSave: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => { },
    configureWebpack: () => { },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: 'localhost',
        port: 9000,
        https: false,
        hotOnly: false,
       /*  proxy: {   //反向代理
           "/api":{    //db/in_theaters以api开头的把api干掉，然后拼接的9000的后面，然后就把那些东西代理到这里链接里了
               target:"http://47.96.0.211:9000",
               changeOrigin:true,  //重改域名
               pathRewrite:{  //以什么开头的，把它称之为
                     "^/api":""
               }
           }
        }, // 设置代理 */
        proxy: {   //      
            "/api":{
                target:"http://120.27.251.30:3014",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""  //以/api开头的
                }
            }
        }, // 设置代理
        before: app => { }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}