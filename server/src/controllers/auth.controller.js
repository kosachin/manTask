require("dotenv").config();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
};

const signUp = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user) {
      return res
        .status(400)
        .send({ message: "User with that email already exists" });
    }

    user = await User.create(req.body);
    const token = newToken(user);
    return res.status(201).send({ user, token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email })
      .select("-password")
      .exec();

    if (!user) {
      return res
        .status(400)
        .send({ message: "User with that email does not exists" });
    }

    const token = newToken(user);

    return res.status(201).send({ user, token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = { signUp, signIn };
