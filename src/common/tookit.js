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
  var time = new Date();  
  var y = time.getFullYear();  
  var m = time.getMonth()+1;  
  var d = time.getDate();  
  var h = time.getHours();  
  var mm = time.getMinutes();  
  var s = time.getSeconds();  

  return `${y}${m}${d}${h}${mm}${s}`;  
};

exports.isMobileClient = function(agent){
  return agent.match(/(iPhone|iPod|Android|ios)/i);
};