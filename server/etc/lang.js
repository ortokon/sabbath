'use strict';

const expose = require('../../common/utils/json').expose;

const fs = require('fs');
const config = require('./config');
const i18n = require('../../common/i18n');

let cache = {};
let lang = config.meta.lang;

/**
 * @private
 * @param {string} lang
 * @param {string} keyset
 * @param {string} key
 * @return string
 */
function _translator (lang, keyset, key){
  cache[keyset] = cache[keyset] || JSON.parse(fs.readFileSync(`./lang/${keyset}/${lang}.json`));
  keyset = cache[keyset];

  return keyset[key];
}

function _lang(newLang) {
  return newLang ?
    lang = newLang :
    lang;
}

/**
 * @public
 * @return {object}
 */
function keysets (){
  return cache;
}

/**
 * @public
 * @param {string} file
 * @return {json}
 */
function parse (file){
  fs.readFile(file, expose(config, 'encoding'), function (data, err){
    if (err) {
      throw err;
    }


  });
}

module.exports = {
  i18n: i18n(_translator, _lang),
  keysets: keysets,
  parse: parse
}
