
const parameters = require('../loader/ConfigLoader.js');

let middleware =  async (ctx, next) => {
  ctx.state.version = parameters.version;
  ctx.state.rootPath = parameters.rootPath;
  await next();
};

module.exports = {
  priority: 20,
  middleware: middleware,
};