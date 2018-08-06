module.exports = class {
  constructor(params) {
    this.params = params;
  }

  isAdmin() {
    if (!this.params['roles']) {
      return false;
    }

    if ('admin' == this.params['roles']) {
      return true;
    }

    return false;
  }

  get(key) {
    return this.params[key] ? this.params[key] : '';
  }
};