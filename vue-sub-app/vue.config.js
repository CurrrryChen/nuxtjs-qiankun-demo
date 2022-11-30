const { defineConfig } = require('@vue/cli-service');
const { name } = require('./package');

module.exports = defineConfig({
  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
    },
  },
  chainWebpack: () => {
    const publicPath = process.env.NODE_ENV === 'production' ? 'https://production.com/' : `http://localhost:8081`;
    module.exports = {
      chainWebpack: (config) => {
        const fontRule = config.module.rule('fonts');
        fontRule.uses.clear();
        fontRule
          .use('file-loader')
          .loader('file-loader')
          .options({
            name: 'fonts/[name].[hash:8].[ext]',
            publicPath,
          })
          .end();
        const imgRule = config.module.rule('images');
        imgRule.uses.clear();
        imgRule
          .use('file-loader')
          .loader('file-loader')
          .options({
            name: 'img/[name].[hash:8].[ext]',
            publicPath,
          })
          .end();
      },
    };
  },
});
