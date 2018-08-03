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
        console.log(body);
       // ctx.session.data = {id: 1};
      }

      return ctx.render('login/index.twig');
    };
  }
}

module.exports = UserController;