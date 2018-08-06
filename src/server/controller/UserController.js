const BaseController = require('./BaseController');
const crypto = require('crypto');

class UserController extends BaseController {
  constructor(){
    super();
  }

  login() {
    return async (ctx, next) => {
      console.log(ctx.state.user.isAdmin());
      if ('POST' == ctx.request.method) {
        let body = ctx.request.body;
      }

      return ctx.render('login/index.twig');
    };
  }
}

module.exports = UserController;