import * as path from 'path';
import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';

import config from '../webpack.config';
import env from './env';


const options = {};
const excludeHotReload = [];

for (const entryName in config.entry as object) {
  if (excludeHotReload.indexOf(entryName) < 0) {
    const entryPath = config.entry[entryName];
    config.entry[entryName] = [
      `webpack-dev-server/client?http://localhost:${env.PORT}`,
      'webpack/hot/dev-server',
      entryPath
    ];
  }
}

config.plugins.splice(0, 0, new webpack.HotModuleReplacementPlugin());

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  contentBase: path.join(__dirname, '../build'),
  headers: { 'Access-Control-Allow-Origin': '*' }
});

server.listen(parseInt(`${env.PORT}`, 10));
