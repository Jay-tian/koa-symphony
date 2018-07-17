const service = require('../loader/ServiceLoader.js');

module.exports = class BaseController{
  constructor() {
    this.service = service;
  }

  getUserService() {
    return this.service.load('service', 'user/UserService');
  }
};