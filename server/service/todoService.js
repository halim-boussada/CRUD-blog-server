var Todo = require("../model/todo.js");

module.exports = new (class TodoService {
  create(data) {
    return Todo.create(data);
  }
  get() {
    return Todo.find();
  }
  getById(_id) {
    return Todo.findOne({ _id });
  }
  delete(_id) {
    return Todo.findOneAndDelete({ _id });
  }
  update(_id, data) {
    console.log({ data, _id });
    return Todo.findOneAndUpdate({ _id }, data);
  }
})();
