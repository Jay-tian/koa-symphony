const BaseService = require('../BaseService.js');
class SessionService extends BaseService{
  constructor(){
    super();
  }

  deleteBySessId(sessId) {
    return this.getCurrentDao().deleteBySessId(sessId);
  }

  getCurrentDao() {
    return this.createDao('system/SessionDao');
  }
}

module.exports = new SessionService();