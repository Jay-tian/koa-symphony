const BaseController = require('./BaseController');

class DefaultController extends BaseController {
  constructor(){
    super();
  }

  index() {
    let user = this.getUserService().getById(1);

    return async (ctx) => {
      user =  await user;
      return ctx.render('index/index.twig');
    };
  }
}

module.exports = DefaultController;