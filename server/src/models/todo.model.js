const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 5, trim: true },
    body: {
      type: String,
      required: true,
      minlength: 5,
    },
    status: { type: Boolean, default: false },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);
module.exports = mongoose.model("todo", todoSchema);
