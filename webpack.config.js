const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // 配置 extensions 来告诉 webpack 在没有书写后缀时，以什么样的顺序去寻找文件
    extensions: ['.mjs', '.js', '.json', '.jsx', '.ts', '.tsx', '.svg'], // 如果项目中只有 tsx 或 ts 可以将其写在最前面
    alias: {
      "~": path.resolve(__dirname),
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /.(jsx?)|(tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'iOS 9, Android 4.4, last 2 versions, > 0.2%, not dead', // 根据项目去配置
                  useBuiltIns: 'usage', // 会根据配置的目标环境找出需要的polyfill进行部分引入
                  corejs: 3, // 使用 core-js@3 版本
                },
              ],
              ['@babel/preset-typescript'],
              ['@babel/preset-react'],
            ],
          },
        },
      },
      // SASS loader
      {
        test: /.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // SVG
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack']
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'template.html')
    })
  ],
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
};