const BaseController = require('./BaseController');

class DefaultController extends BaseController {
  constructor(){
    super();
  }

  createArticle() {
    return async (ctx) => {
      return ctx.render('article/create.twig', {
        user: ctx.state.user
      });
    };
  }
}

module.exports = DefaultController;