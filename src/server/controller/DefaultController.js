const BaseController = require('./BaseController');
const os = require('os');

class DefaultController extends BaseController {
  constructor(){
    super();
  }

  index() {
    return async (ctx) => {
      console.log(os.tmpDir());
      return ctx.render('index/index.twig', {
        user: ctx.state.user
      });
    };
  }
}

module.exports = DefaultController;