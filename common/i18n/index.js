'use strict';

/**
 * I18N initializator
 * @param {function} translate - translator function
 * @param {function} language - language switcher
 * @param {function} [interpolate] - interpolation function
 * @return {function}
 */
function i18n(translate, language, interpolate){
  /**
   * @public
   * @param {string} [lang]
   * @return {string}
   */
  function i18nLang (lang){
    if (lang){
      return language(lang);
    } else {
      return language();
    }
  }

  /**
   * Translator function
   * @public
   * @param {string} keyset
   * @param {string|object} key
   * @param {object} interpolant
   * @return {string}
   */
  function i18nTranslate (keyset, key, interpolant) {
    var argc = arguments.length;
    var mKeyset = null;
    var mKey = null;
    var mInterpolant = null; 
    var translation = null;
    var arityError = new SyntaxError('Wrong arity: ' + argc + ' have got, but 1 - 3 expected.');
    var wrongKey = new TypeError('Wrong type of key. Only string type keys are allowed');
    var wrongKeySet = new TypeError('Wrong type of keyset. Only string type keysets are allowed');
    var wrongInterpolant = new TypeError('Wrong type of i18n data. Only objects are allowed');
    var isWrongKeyset = typeof keyset !== 'string'
    var typeofKey = typeof key;

    if (argc === 0 || argc > 3) {
      throw arityError;
    }
    
    if (argc === 1){
      if (isWrongKeyset) {
        throw wrongKey;
      }
      mKeyset = 'common';
      mKey = keyset;
    } else 
    if (argc === 2) {
      if (isWrongKeyset) {
        throw wrongKeySet;
      }

      if (typeofKey === 'object') {
        mKeyset = 'common';
        mKey = keyset;
        mInterpolant = key;
      } else
      if (typeofKey === 'string') {
        mKeyset = keyset;
        mKey = key;
      } else {
        throw wrongKey;
      }
    } else {
      if (typeof interpolant !== 'object'){
        throw wrongInterpolant;
      }
      if (typeofKey !== 'string'){
        throw wrongKey;
      }
      if (isWrongKeyset){
        throw wrongKeySet;
      }

      mKeyset = keyset;
      mKey = key;
      mInterpolant = interpolant;
    }

    translation = translate(i18nLang(), mKeyset, mKey);

    if (mInterpolant) {
    translation = interpolate ?
      interpolate(translation, mInterpolant) :
      translation.replace(/{{(.+?)}}/g, function (match, key){
        return mInterpolant[key];
      });
    }

    return translation;
  }

  i18nTranslate.lang = i18nLang;
  return i18nTranslate;

}

module.exports = i18n;
