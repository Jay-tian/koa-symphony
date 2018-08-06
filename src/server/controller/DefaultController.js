const BaseController = require('./BaseController');

class DefaultController extends BaseController {
  constructor(){
    super();
  }

  index() {
    return async (ctx) => {
      console.log(ctx.state.user);
      return ctx.render('index/index.twig');
    };
  }
}

module.exports = DefaultController;