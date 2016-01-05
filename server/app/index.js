'use strict';

const expose  = require('../../common/utils/json').expose;

const config  = require('../etc/config');
const express = require('express');
const Warden  = require('warden.js');

let expressInstance = express();
let app = createApp();

module.exports = app;

function createApp () {
  return Warden({
    start: start,
    shutdown: shutdown,
    restart: restart,
    server: null,
    settings: {},
    instance: expressInstance,
    config: configure
  });
}

/**
 * Starting express.js web-server
 * @public
 * @param {object} settings
 * @param {mixed} data
 * @emits {ready}
 */
function start (settings, data) {
  settings = settings || {};
  Object.assign(app.settings, expose(config, 'port', 'host', 'static'), settings);
  app.server = expressInstance.listen(app.settings.port, function(){
    app.emit('ready', data);
  });
}

/**
 * Shutdowning express.js web-server
 * @public
 * @emits {closed}
 */
function shutdown () {
  app.server.close();
  app.server = null;
  app.emit('closed');
}

/**
 * Restarts web-server
 */
function restart (between) {
  between = between || function(done) {
    done();
  };

  const settings = Object.assign({}, app.settings);
  app.shutdown();
  app = null;
  between(function done(){
    app = createApp();
    app.start(settings);  
  });  
}

function configure (cfg) {
  let routes = cfg.routes || [];

  app.instance.use(express.static(app.settings.static));
  routes.forEach(router => router(app.instance));
}
