import * as webpack from 'webpack';
import config from '../webpack.config';

webpack(
  config,
  function (err) { if (err) throw err; }
);
