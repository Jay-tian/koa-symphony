module.exports = {
  options: {
    profix: '',
  },
  index: {
    path: '/',
    controller: 'Default',
  },
  login: {
    path: '/login',
    controller: 'User',
    methods: ['get', 'post']
  },
};
