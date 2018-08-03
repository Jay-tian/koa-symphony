const BaseController = require('./BaseController');

class UserController extends BaseController {
  constructor(){
    super();
  }

  login() {
    let user = this.getUserService().getById(1);
    return async (ctx, next) => {
      ctx.session.data = {id: 12, courseId: 20};
      return ctx.render('login/index.twig');
    };
  }
}

module.exports = UserController;