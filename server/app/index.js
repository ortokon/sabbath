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
    instance: expressInstance
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
  app.settings = Object.assign({}, expose(config, 'port', 'host'), settings);
  app.server = expressInstance.listen(settings.port, function(){
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
