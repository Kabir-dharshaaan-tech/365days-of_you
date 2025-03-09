const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    date: { type: String, required: true, unique: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;
