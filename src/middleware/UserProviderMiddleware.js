const User = require('../kernel/UserProvider.js');
const userDao = global.symphony.service.load('dao', 'user/UserDao.js');
const sessonDao = global.symphony.service.load('dao', 'system/SessionDao.js');
const toolkit = require('../toolkit/index.js');

let middleware =  async (ctx, next) => {
  let userId = 0;
  if (ctx.session.data) {
    userId = ctx.session.data.userId;
    sessonDao.update(ctx.session.id, {deadline: toolkit.timestamp() + 24*60*60});
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