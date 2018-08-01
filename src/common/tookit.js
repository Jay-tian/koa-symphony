const xxtea = require('./xxtea.js');

exports.arrayIndex = function(data, column){
  let newData = [];
  if (!data) {
    return [];
  }
  data.forEach(f => {
    newData.push(f[column]);
  });

  return newData;
};

exports.timestamp = function(){
  return Math.round(new Date() / 1000);
};

exports.isMobileClient = function(agent){
  return agent.match(/(iPhone|iPod|Android|ios)/i);
};

exports.requires = function(data, keys){
  let result = true;
  keys.every(function(key) {
    if (!data.hasOwnProperty(key)) {
      result = false;
      return false;
    }

    return true;
  }, this);

  return result;
};

exports.unique = function(data) {
  return Array.from(new Set(data));
};

