const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const TodoSchema = new mongoose.Schema(
  {
    title: String,
    text: String,
    category: String,
    image: String,
    type: { type: String, default: "Todo" },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
