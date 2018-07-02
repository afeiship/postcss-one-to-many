var postcss = require('postcss');
var modules = require('./modules');

module.exports = postcss.plugin('postcss-one-to-many', function(inOptions) {
  return function (css) {
    var options = inOptions || {};
    // console.log(options);
    // Processing code will be added here
    css.walkRules(function (rule) {
      rule.walkDecls(function (decl, i) {
        var key = decl.prop;
        var value = decl.value;
        var moduleValues = modules[key];

        if (moduleValues) {
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
