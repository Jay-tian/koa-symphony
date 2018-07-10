const db = require('./init.js');
class ProxyDao {
  constructor(){
    this.db = db;
    this.pool = [];
    this.proxyMethods = ['create'];
  }

  dao(name) {
    return this.pool[name] ? this.pool[name] : require('dao/'+name);
  }

  execute(method) {
    this.before();
    console.log(method);
    this.after();
  }

  before() {

  }

  after() {

  }

  create(parameter) {
    console.log(parameter);
  }
}

module.exports = new ProxyDao();