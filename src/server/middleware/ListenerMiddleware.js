
let middleware =  async (ctx, next) => {
  if (0 == ctx.request.url.indexOf('/admin') && !ctx.state.user.isAdmin()) {
    ctx.redirect('back', '/');
  }



  await next();
};

module.exports = {
  priority: 10,
  middleware: middleware,
};