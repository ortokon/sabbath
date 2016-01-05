'use strict';

const path = require('path');
const join = path.join;

module.exports = {
  title: 'sabbath',
  version: '0.0.1',
  rooty: rooty,
  server: rooty('server'),
  static: rooty('./static'),
  entry: 'index',
};

/**
 * Return relative to the root directory of project path to given URL argument
 *
 * @param {string} url - URL
 * @return {string} - relative path to {URL}
 */
function rooty (url) {
  return join(__dirname, '../../', url);
}