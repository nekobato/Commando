const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    "renderer": "./src/renderer",
  },
  output: {
    path:  path.join(__dirname, 'app/js'),
    filename: '[name].js'
  },
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: path.join('../assets', '[name].[ext]?[hash]')
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'renderer': path.join(__dirname, 'src/renderer'),
      'root': path.join(__dirname, 'src')
    }
  },
  devtool: 'source-map'
}
