import path from 'path';

export const conf ={
    entry: '/index.js', //entry point for the bundle
    output:{
        filename: 'bundle.js', //output file name
        path: path.resolve(__dirname, 'dist'), //output directory
    },
    resolve:{
        extensions: ['.js'], //Resolve these extensions
    },
    mode: 'development', //set mode to development or production
    // module: {
    //     rules: [
    //       {
    //         test: /\.js$/,
    //         exclude: /node_modules/,
    //         use: {
    //           loader: 'babel-loader',
    //           options: {
    //             presets: ['@babel/preset-env', '@babel/preset-react'],
    //           },
    //         },
    //       },
    //       // Add other loaders if needed
    //     ],
    //   },
};