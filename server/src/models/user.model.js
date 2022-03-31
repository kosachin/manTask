const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    password: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    age: { type: Number },
    mobile: {
      type: String,
      minlength: 10,
      maxlength: 10,
      trim: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next;
  this.password = bcrypt.hashSync(this.password, 8);
  return next();
});

userSchema.methods.checkPassowrd = function (pass) {
  return bcrypt.compareSync(pass, this.pass);
};

module.exports = mongoose.model("user", userSchema);
