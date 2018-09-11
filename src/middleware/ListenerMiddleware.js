
let middleware =  async (ctx, next) => {
  if (0 == ctx.request.url.indexOf('/admin') && !ctx.state.user.isAdmin()) {
    ctx.redirect('/');
    return;
  }

  if (0 == ctx.request.url.indexOf('/my/') && !ctx.state.user.isLogin()) {
    ctx.redirect('/');
    return;
  }

  if ((0 == ctx.request.url.indexOf('/login') || 0 == ctx.request.url.indexOf('/reigster')) && ctx.state.user.isLogin()) {
    ctx.redirect('/');
    return;
  }

  if (0 == ctx.request.url.indexOf('/logout') && !ctx.state.user.isLogin()) {
    ctx.redirect('/');
    return;
  }
  
  await next();
};

module.exports = {
  priority: 10,
  middleware: middleware,
};