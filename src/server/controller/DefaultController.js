const BaseController = require('./BaseController');
const toolkit = require('../../common/toolkit.js');

class DefaultController extends BaseController {
  constructor(){
    super();
  }

  index() {
    return async (ctx) => {
      let articles = await this.articleService().search({}, [], 0, 10);
      console.log(toolkit.getSizeOfObject(articles));
      return ctx.render('index/index.twig', {
        user: ctx.state.user,
        articles: articles,
      });
    };
  }

  articleService() {
    return this.createService('Article/ArticleService');
  }
}

module.exports = DefaultController;