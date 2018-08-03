const BaseController = require('./BaseController');
const crypto = require('crypto');

class UserController extends BaseController {
  constructor(){
    super();
  }

  login() {
    return async (ctx, next) => {
      let currentUser = await this.getCurrentUser(ctx.session);
      console.log(currentUser);
      if ('POST' == ctx.request.method) {
        let body = ctx.request.body;

       // ctx.session.data = {id: 1};
      }

      return ctx.render('login/index.twig');
    };
  }
}

module.exports = UserController;