const User = require('../kernel/UserProvider.js');

let middleware =  async (ctx, next) => {
  if (ctx.session.data) {
    ctx.state.user = new User(ctx.session.data);
  } else {
    ctx.session.data = {
      userId: 0
    };
    ctx.state.user = new User({userId: 0});
  }

  await next();
};

module.exports = {
  priority: 5,
  middleware: middleware,
};