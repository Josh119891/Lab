`
Vue 学习笔记
1.https://webpack.js.org/guides/getting-started/
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

`
2.导入子组件到父组件中
    父组件
    - import Child from "./ChilFile" //获取文件路径
    - componenets:{Child}            //注册子组件
    - <child></child>                //使用
    子组件
    - name: "Child"

3.props 子组件单向接受父类的数据
静态绑定
    父组件
    - <child message="我是子组件一！"></child> //输入进去
    子组件
    - props: ['message'] //声明一个自定义的属性
    - <template>     <h3>{{message}}</h3>       </template> //使用来自父组件的数据
动态绑定
    基本类似,
    父组件
    - <child v-bind:message="a+b"></child>
    - data(){
        return {
            a:"获取数据",
            b:axio.get()...
        }
    }
    子组件不变

    prop 着重于数据的传递，不能调用子组件里的属性和方法
    $ref 着重于索引，主要用来调用子组件里的属性和方法，ref用在dom元素的时候，能使到选择器的作用
    
    $emit 子组件向父组件通信
    vm.$emit( event, arg )
`