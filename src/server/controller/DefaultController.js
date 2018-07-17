const BaseController = require('./Base');

class DefaultController extends BaseController {
  constructor(){
    super();
  }

  index() {
    let user = this.getUserService().get(1);
    return async (ctx, next) => {
      return ctx.render('index/index.twig');
    };
  }
}

module.exports = DefaultController;