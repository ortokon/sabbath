'use strict';

module.exports.expose = expose;
module.exports.forOf = forOf;

/**
 * @public
 * @param {object} o - given object
 * @param {string} name - name of property
 * @e
 */
function expose (o, name) {
  return arguments.length > 2 ?
    [].slice.call(arguments, 1).reduce(function (summary, current) {
      o[current] ? summary[current] = o[current] : null;
      return summary;
    }, {}) :
    (o[name] ? {[name]: o[name]} : null);
}


function forOf (o, fn){
  Object.keys(o).forEach(function(key, i){
    fn(o[key], key);
  });
}