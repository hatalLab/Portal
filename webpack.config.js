const HtmlWebPackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const path = require('path')

module.exports = (env) => {
    return {
        'entry': './src/index.js',
        output: {
          path: path.join(__dirname, 'public'),
          filename: 'bundle.js'
        },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
          }, {
            test: /\.s?css$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          },{
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          }]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
        favicon: './public/favicon.ico'
      }),
      new InterpolateHtmlPlugin({
        PUBLIC_URL: 'public' // can modify `static` to another name or get it from `process`
    })
    ]
};
  };

  