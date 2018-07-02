const nx = require('next-js-core2');
const padding = require('./padding');
const margin = require('./margin');
module.exports = nx.mix(padding, margin);
