
let middleware =  async (ctx, next) => {
  console.log(ctx.state.user.isAdmin());
  if (!ctx.state.user.isAdmin()) {
    await next();
  }
};

module.exports = {
  priority: 10,
  middleware: middleware,
};