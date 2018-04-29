class ServiceManage {
  constructor(){
    this.pool = [];
  }

  create(name) {
    if (this.pool[name]) {
      return this.pool[name];
    }

    const service = require('service/'+name);
    this.pool[name] = new service();
    
    return this.pool[name];
  }
}

module.exports = ServiceManage;