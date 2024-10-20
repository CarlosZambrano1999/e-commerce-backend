const jwt = require('jsonwebtoken');

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();
    const tokenData =  jwt.verify(token, 'tvc12345');
    if (tokenData._id) {
      next();
    } else {
      res.status(409);
      res.send({ unauthorization: true });
    }

  } catch (e) {
    console.log(e);
    res.status(409);
      res.send({ unauthorization: true });
  }
};

module.exports = checkAuth;