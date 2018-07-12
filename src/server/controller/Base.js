const DaoProxy = require('../db/proxy.js');

module.exports = class BaseController{
  constructor() {
      this.DaoProxy = DaoProxy;
  }

  response(html) {
  }

  responseJSON(json) {

  }
};