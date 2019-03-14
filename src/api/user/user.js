const Base = require('../base.js');

class User extends Base{
  get() {
    console.log(123123);
  }
}

module.exports = new User();