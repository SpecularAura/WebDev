const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const updateSchema = new Schema(
  {
    from: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    lessons: {
      type: String,
    },
    activities: {
      type: String,
    },
    created: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Update", updateSchema);
