let middleware =  async (ctx, next) => {
  if (ctx.session.data) {
    ctx.state.user = {
      getId: function(){
        return 1;
      }
    }
  } else {
    ctx.session.data = {
      userId: 0
    };
    ctx.state.user = {
      getId: function(){
        return 0;
      }
    }
  }

  await next();
};

module.exports = {
  priority: 5,
  middleware: middleware,
};