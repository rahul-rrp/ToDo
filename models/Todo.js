const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
    maxLength: 50,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now, // ✅ Use function reference, not Date.now()
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now, // ✅ Fix applied here as well
  },
});

module.exports = mongoose.model("Todo", todoSchema);
