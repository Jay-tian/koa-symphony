const BaseController = require('./BaseController');

class UserController extends BaseController {
  constructor(){
    super();
  }

  login() {
    return async (ctx, next) => {
      if ('POST' == ctx.request.method) {
        let body = ctx.request.body;
      }
      ctx.session.data = {id: 12, courseId: 20};
      return ctx.render('login/index.twig');
    };
  }
}

module.exports = UserController;