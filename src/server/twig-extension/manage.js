const Twig = require('twig');
const list = require('./extensionList.js');

(function(list){
  for (var key in list) {
    list[key].forEach(function(path) {
      let functions = require('./'+path);
      for (let name in functions) {
        Twig[key](name, functions[name]);
      }
    }, this);
  }
})(list);