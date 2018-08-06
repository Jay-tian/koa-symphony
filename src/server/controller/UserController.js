const BaseController = require('./BaseController');
const crypto = require('crypto');

class UserController extends BaseController {
  constructor(){
    super();
  }

  login() {
    return async (ctx, next) => {
      if ('POST' == ctx.request.method) {
        let body = ctx.request.body;
      }

      return ctx.render('login/index.twig');
    };
  }

  logout() {
    return async (ctx, next) => {
      this.sessionService().deleteBySessId(ctx.session.sessId);
      return ctx.render('login/index.twig');
    };
  }

  sessionService()
  {
    return this.createService('system/SessionService');
  }
}

module.exports = UserController;