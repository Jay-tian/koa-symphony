module.exports = class {
  constructor(user) {
    this.user = user;
  }

  isAdmin() {
    return this.user.get('roles').indexOf('admin') >= 0 ? true : false ;
  }

  get(key) {
    return this.user.get(key);
  }
};