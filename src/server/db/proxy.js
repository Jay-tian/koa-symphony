const parameters = require('../loader/ConfigLoader.js');
const path = require('path');

class ProxyDao {
  constructor(name) {
    if (ProxyDao.pools[name]) {
      return ProxyDao.pools[name];
    }

    let daoPath = path.join(parameters.serverPath, 'dao/', name);
    this.dao = this.dao ? this.dao : require(daoPath);
    let $proxy = new Proxy(this, {
      get(target, key){
        return target[key];
      }
    });
    
    ProxyDao.pools[name] = $proxy;
    return $proxy;
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