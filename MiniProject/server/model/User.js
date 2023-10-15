const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    profilePic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      Parent: {
        type: Number,
        default: 2,
      },
      Teacher: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
