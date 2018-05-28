const BaseController = require('./BaseController');

class DefaultController extends BaseController {
    constructor(){
      super()
    }

    index() {
      return this->response();
    }
}
exports.index = async (ctx) => { ctx.body = 'helloworld' };