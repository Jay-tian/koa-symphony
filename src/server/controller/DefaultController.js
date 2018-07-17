const BaseController = require('./Base');

class DefaultController extends BaseController {
  constructor(){
    super();
  }

  index() {
    let user = this.getUserService().get(123);
    // let f = async function() {
    //   let users = await user;
    //   return users;
    // }
     
    return async (ctx, next) => {
       //let users = await user;
    //  console.log(users.dataValues);
      return ctx.render('index/index.twig');
    };
  }
}

module.exports = DefaultController;