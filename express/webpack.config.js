const path = require('path');

module.exports = {
  entry: './src/index.js', // Входной файл приложения
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Папка для выходного файла
  },
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "fs": false,
      "tls": false,
      "dns": false,
      "net": false,
    },
  },
  module: {
    rules: [
      { // Правила для обработки JavaScript и JSX файлов
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      { // Правила для обработки CSS файлов
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};