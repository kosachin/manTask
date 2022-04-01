require("dotenv").config();
const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3oik5.mongodb.net/todos`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
};
