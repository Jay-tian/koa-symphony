const User = require('../kernel/UserProvider.js');
const userDao = global.service.load('dao', 'user/UserDao.js');

let middleware =  async (ctx, next) => {
  let user  = await userDao.getById(ctx.session.userId);
  
  ctx.state.user = new User(user);
  await next();
};

module.exports = {
  priority: 5,
  middleware: middleware,
};