module.exports = class BaseController{
  constructor() {
  }

  getUserService() {
    return this.createService('user/UserService');
  }

  createService(name) {
    return global.symphony.service.load('service', name);
  }
};