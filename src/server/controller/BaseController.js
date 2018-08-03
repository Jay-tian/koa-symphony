module.exports = class BaseController{
  constructor() {
  }

  getUserService() {
    return this.createService('user/UserService');
  }

  createService(name) {
    return global.service.load('service', name);
  }

  getCurrentUser(session)
  {
    return this.getUserService().getById(session.userId);
  }
};