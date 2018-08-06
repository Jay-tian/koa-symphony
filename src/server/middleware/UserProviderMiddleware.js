const User = require('../kernel/UserProvider.js');
const userDao = global.service.load('dao', 'user/UserDao.js');

let middleware =  async (ctx, next) => {
  let userId = 0;
  if (ctx.session.data) {
    userId = ctx.session.data.userId;
  } else {
    ctx.session.data = {userId: 0};
  }
  let user  = await userDao.getById(userId);
  ctx.state.user = new User(user);
  
  await next();
};

module.exports = {
  priority: 5,
  middleware: middleware,
};