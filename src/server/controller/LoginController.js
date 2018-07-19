const BaseController = require('./Base');

class LoginController extends BaseController {
  constructor(){
    super();
  }

  login() {
    return async (ctx, next) => {
      return ctx.render('login/index.twig');
    };
  }
}

module.exports = LoginController;