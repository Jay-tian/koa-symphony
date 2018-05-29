const BaseController = require('./Base');

class DefaultController extends BaseController {
  constructor(){
    super();
  }
  
  index() {
    return async (ctx, next) => { 
      return ctx.render('index/index.twig', {});
    };
  }
}

module.exports = DefaultController;