module.exports = ({ config }) => {
    config.module.rules = config.module.rules.filter(
            f => f.test.toString() !== '/\\.css$/'
          );
    config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.module\\.css$/'
    );
    config.module.rules.push({
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        });
    const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));
    const assetLoader = {
            loader: assetRule.loader,
            options: assetRule.options || assetRule.query
          };

    config.module.rules.unshift({
        test: /\.svg$/,
        use: ["@svgr/webpack", assetLoader],
      });
  
    return config;
  };