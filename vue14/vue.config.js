module.exports = {
    devServer: {
     port: '8080',
     open: true,
     proxy: {
       '/api': {
         // /api 的意义在于，声明axios中url已/api开头的请求都适用于该规则，
         // 注意是以/api开头，即：axios.post({url: '/api/xxx/xxx'})
        //  target: 'http://shihn.vipgz4.idcfengye.com',
        // target:'http://localhost:80',
        target:'http://192.168.100.252',
         // 此处target的意义在于：造成跨域是因为访
         // 问的host与我们的请求头里的origin不一致，所以我们要设置成一致
         changeOrigin: true,
         pathRewrite: {'^/api': ''}
       }
     }
   }
 };
 