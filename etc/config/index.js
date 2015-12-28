'use strict';

const commonConfig = require('./common');
const serverConfig = require('./server/config');
const staticConfig = require('./static/config');

let config = Object.assign({}, {
  common: Object.assign({}, serverConfig.common(), staticConfig.common()),
  server: serverConfig,
  static: staticConfig });

module.exports = config;