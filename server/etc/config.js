'use strict';

const common = require('../../etc/config/common');

const config = {
	port: 	_env('PORT', 9000),
	host: 	_env('HOST', 'localhost'),
	dbPort: _env('DB_PORT', 18200),
	dbHost: _env('DB_HOST', 'localhost'),

	templateEngine: null,
	
	meta: {
		lang: 'ru',
		encoding: 'utf-8'
	}
};


module.exports = Object.assign({}, common, config);

/**
 * Return environment variable `name` or given default value
 *
 * @param {string} name - environment variable name
 * @param {mixed} def - default value
 * @return {string|mixed}
 */
function _env (name, def) {
	return process.env[name] || def;
}
