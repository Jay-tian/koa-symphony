const parameters = require('config/parameters.js');

module.exports = {
  asset: function(path) {
    return path + '?v=' + parameters.version;
  }
};