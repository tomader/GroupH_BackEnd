const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  University: {
    type: String,
    required: true
  },
  Major: {
    type: String,
    required: true
  },
  file: {
    type: Object,
    required: true
  }
});

module.exports = users = mongoose.model("users", ItemSchema);
