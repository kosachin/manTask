const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 3, },
    body: {
      type: String,
      required: true,
      minlength: 2,
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
