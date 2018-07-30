const BaseController = require('./BaseController');

class UserController extends BaseController {
  constructor(){
    super();
  }

  login() {
    return async (ctx, next) => {
      return ctx.render('login/index.twig');
    };
  }
}

module.exports = UserController;