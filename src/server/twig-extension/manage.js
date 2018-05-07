const Twig = require('twig');
Twig.extendFunction('test', function(value) {
  return value;
});