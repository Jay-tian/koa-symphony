const BaseController = require('./Base');

class DefaultController extends BaseController {
  constructor(){
    super();
  }

  index() {
    let userDao = this.getUserDao();
    userDao.create({
      title: 'title1',
    });

    return async (ctx, next) => {
      return ctx.render('index/index.twig', {});
    };
  }

  getUserDao() {
    return new this.DaoProxy('User/UserDao');
  }
}

module.exports = DefaultController;