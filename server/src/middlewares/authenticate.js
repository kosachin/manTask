const { verify } = require("jsonwebtoken");
require("dotenv").config();
const verifyToken = async (token) => {
  return new Promise((res, rej) => {
    verify(token, process.env.JWT_SECRET_KEY, function (err, user) {
      if (err) return rej(err);
      res(user);
    });
  });
};

module.exports = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return res
      .status(400)
      .send({ message: "Please provide valid authorization token" });
  }
  const bearerToken = req.headers.authorization;
  const token = bearerToken.split("Bearer ")[1].trim();
  let user;
  try {
    user = await verifyToken(token);
  } catch (err) {
    return res.status(401).send({ message: err.message, location: "catch" });
  }
  req.user = user.user;
  return next();
};
