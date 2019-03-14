let middleware =  async (ctx, next) => {
  let methods = {
    post: 'add',
    delete: 'delete',
    get: 'get',
    patch: 'update',
  };
  let method = ctx.request.method;
  
  ctx.body =  JSON.stringify({});
  ctx.response.status = 404;
  return;
};

module.exports = {
  priority: 6,
  middleware: middleware,
};