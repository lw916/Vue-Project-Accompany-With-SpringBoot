module.exports = {
    devServer:{
        port:8081,
        host:"0.0.0.0",
        https:false,
        open:false,
        proxy:{
            'query':{
                target:'http://localhost:8081',
                changeOrigin:true,
                ws:true,
                PathRewrite:{
                    '^/api': ''
                }
            }
        }
    }
}