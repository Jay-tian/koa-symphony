const BaseController = require('./BaseController');

class DefaultController extends BaseController {
  constructor(){
    super();
  }

  index() {
    let user = this.getUserService().getById(1);
    console.log(user);
    
    return async (ctx) => {
      return ctx.render('index/index.twig');
    };
  }
}

module.exports = DefaultController;