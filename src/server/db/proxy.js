class ProxyDao {
  constructor(dao) {
    this.dao = dao;
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

module.exports = ProxyDao;