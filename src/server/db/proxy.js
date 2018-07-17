const ServiceLoader = require('../loader/ServiceLoader.js');

class ProxyDao {
  constructor(name) {
    if (ProxyDao.pools[name]) {
      return ProxyDao.pools[name];
    }

    this.dao = ServiceLoader.load('dao', name);
    let $proxy = new Proxy(this, {
      get(target, key){
        return target[key];
      }
    });
    
    ProxyDao.pools[name] = $proxy;
    return $proxy;
  }

  getById(id) {
    return this.dao.getById(id);
  }

  before() {

  }

  after() {

  }

  create(parameter) {
    this.dao.create(parameter);
  }
}

ProxyDao.pools = {};

module.exports = ProxyDao;