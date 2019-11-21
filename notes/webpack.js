`
Webpack
https://webpack.js.org/guides/getting-started/
webpack
    static module bundler
    builds a dependency graph - mapping all modules we need
                              - generate bundler files
    Plugins
    Mode
    Browser Compatibility
    
`
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    //Entry: 程序开始点
    entry: './path/to/my/entry/file.js',
    //Output: 保存导出文件的地方和文件名字
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    //Loaders: 默认可读JS,JSON文档， loaders可以让程序读取其他类型的文件
    module: {
        rules: [
          { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    //Plugins: 用来处理更多类型的事务，如bundle optimization, asset management and injection of environment variables.
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    mode: 'production'
};

