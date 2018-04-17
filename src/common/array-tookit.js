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

exports.trim = (str, is_global = true ) => {
  let result = str.replace(/(^\s+)|(\s+$)/g, '');
  if(is_global) {
    result = result.replace(/\s/g, '');
  }
  return result;
};