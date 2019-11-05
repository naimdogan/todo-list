module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'postcss-loader'],
        },
        {
          test: /\.jsx?$/,
          use: ['babel-loader', 'astroturf/loader'],
        },
        {
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
        }
      ]
    }
  }