var postcss = require('postcss');
var nx = require('next-js-core2');
var modules = require('./modules');

module.exports = postcss.plugin('postcss-one-to-many', function(options) {
  return function (css) {
    options = options || {};
    // console.log(options);
    // Processing code will be added here
    css.walkRules(function (rule) {
      rule.walkDecls(function (decl, i) {
        var key = decl.key;
        var value = decl.value;
        var moduleValues = modules[key];

        if (moduleValues.length > 0) {
          moduleValues.forEach(function (prop) {
            decl.cloneBefore({
              prop: prop,
              value: value
            });
          });
          decl.remove();
        }

      });
    });
  }
});
