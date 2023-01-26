const User = require('../models/User');

class UserController {
  // [GET] /user/all
  all(req, res, next) {
    User.find({})
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        res.status(400).send({ message: 'ERROR' });
      });
  }
}

module.exports = new UserController();
