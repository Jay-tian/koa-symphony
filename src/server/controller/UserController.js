const BaseController = require('./Base');

class UserController extends BaseController {
  constructor(){
    super();
  }

  login() {
    return async (ctx, next) => {
      console.log(ctx.request.body);
      return ctx.render('login/index.twig');
    };
  }
}

module.exports = UserController;