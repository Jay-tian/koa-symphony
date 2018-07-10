const daoProxy = require('../db/proxy.js');



let db =  async (ctx, next) => {
  ctx.state.db = daoProxy;

  await next();
};

module.exports = {
  priority: 1,
  middleware: db,
};