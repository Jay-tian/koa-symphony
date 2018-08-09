
let middleware =  async (ctx, next) => {
  if (0 == ctx.request.url.indexOf('/admin') && !ctx.state.user.isAdmin()) {
    ctx.redirect('back', '/');
  }

  if ((0 == ctx.request.url.indexOf('/login') || 0 == ctx.request.url.indexOf('/reigster')) && ctx.state.user.isLogin()) {
    ctx.redirect('back', '/');
  }

  if (0 == ctx.request.url.indexOf('/logout') && !ctx.state.user.isLogin()) {
    ctx.redirect('back', '/');
  }

  ctx.ip = ctx.ip.replace('::ffff:', '');

  await next();
};

module.exports = {
  priority: 10,
  middleware: middleware,
};