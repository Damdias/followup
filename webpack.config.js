var webpack = require("webpack");

module.exports = {
    plugins: [        
           new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
           }),
           
         ],
    entry:"./App.js",
     output:{
        path:__dirname,
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader?modules=true'
              }
        ]
    }
    // externals: {
    //     jquery: 'jQuery'
    //   }
    
}