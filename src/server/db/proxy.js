class ProxyDao {
  constructor(){
    this.pool = [];
    this.proxyMethods = ['create'];
  }

  createDao(name) {
    return this.pool[name] ? this.pool[name] : require('dao/'+name);
  }

  execute(method) {
    this.before();

    this.after();
  }

  before() {

  }

  after() {

  }

  create(parameter) {

  }
}

module.exports = new ProxyDao();