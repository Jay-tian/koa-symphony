const BaseController = require('./BaseController');
const crypto = require('crypto');

class UserController extends BaseController {
  constructor(){
    super();
  }

  login() {
    return async (ctx, next) => {
      // let currentUser = await this.getCurrentUser(ctx.session);
      if ('POST' == ctx.request.method) {
        let body = ctx.request.body;
      }

      return ctx.render('login/index.twig');
    };
  }
}

module.exports = UserController;