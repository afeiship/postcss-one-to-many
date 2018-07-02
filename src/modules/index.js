var nx = require('next-js-core2');
var padding = require('./padding');
var margin = require('./margin');
var radius = require('./radius');

module.exports = nx.mix(padding, margin, radius);
