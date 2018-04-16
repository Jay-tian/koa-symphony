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