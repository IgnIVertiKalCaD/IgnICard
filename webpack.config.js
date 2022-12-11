module.exports = {
    entry: './app.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        // ... other configured loaders
        {
          test: /\.svg$/,
          use: [
            'vue-svg-icon-loader',
          ],
        }
      ]
    }
  }