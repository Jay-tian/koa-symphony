module.exports = class BaseController{
  constructor() {
    
  }

  response(html) {
    return async (ctx) => { ctx.body = html };
  }

  responseJSON(json) {

  }
};