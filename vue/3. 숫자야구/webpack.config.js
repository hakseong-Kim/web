const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports ={
    mode : 'development',  //실제 서비스로 한다면은 producion으로 진행
    devtool: 'eval',
    resolve  :{
        extensions: ['.js', '.vue'],
    },
    entry : {
        app: path.join(__dirname,'./main.js'),
    }, // 
    module : {
        rules: [
            {
                test:/\.vue$/,
                loader: 'vue-loader',
            }
        ],
    },
    plugins : [
        new VueLoaderPlugin(),
    ],
    output : {
        filename: '[name].js',
        path: path.join(__dirname,'dist'), 

    },
};  // node의 모듈을 만들었다고 판단 