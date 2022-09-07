const path = require('path');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { webpack } = require('webpack');


module.exports = {
    name : 'self-test',
    mode : 'development',
    devtool: 'eval',
    
    resolve: {
        extensions: ['.js', '.jsx']
    },

    module : {
        rules : [{
            test: /\.jsx?$/, // jsx 파일에 babel을 적용
            loader: 'babel-loader',
            options : {
                presets:[ 
                
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR','last 2 chrome versions'],
                        },
                        debug : true,
                    }],
                    //https://github.com/browserslist/browserslist#queries
                    '@babel/preset-react'
                ],
                plugins : [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                    // 핫 리로딩 & 문법
            ],
                
            },
        }],
    },
    // 확장 프로그램
    plugins : [
        // 모든 설정에 debug 추가
        new LoaderOptionsPlugin ({ debug : true }),        
        new RefreshWebpackPlugin(),
    ],

    entry: {
        app : ['./client']
    }, // 입력

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    }, // 출력

    devServer : {
        //devMiddleware: {publicPath: './'},
        static : {directory: path.resolve(__dirname)}, // 정적파일 경로
        hot: true,
        host: '127.0.0.1',
        port: 9000,
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:8080'
      }
    }
};