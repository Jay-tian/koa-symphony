module.exports = {
  '/hello/:name': async (ctx) => { 
    ctx.body = 'helloworld' 
  },
  '/a/b': async (ctx) => { 
    ctx.body = 'helloworld' 
  }
};
