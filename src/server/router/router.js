module.exports = {
  options: {
    profix: '/',
  },
  login: {
    path: 'login',
    controller: 'login',
    methods: ['post', 'get'],
  },
  index: {
    path: '',
    controller: 'Default',
  }
};
