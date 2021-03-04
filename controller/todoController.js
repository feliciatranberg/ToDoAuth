const Todo = require("../model/todo");
const User = require("../model/user");

const todoMain = async (req, res) => {
  const userTodoList = await User.findOne({ _id: req.user.user._id }).populate(
    "todoList"
  );
  res.render("todo.ejs", { todoTasks: userTodoList.todoList });
};

const editTodo = async (req, res) => {
  const id = req.params.id;
  const userTodoList = await User.findOne({ _id: req.user.user._id }).populate(
    "todoList"
  );
  res.render("todoEdit.ejs", { todoTasks: userTodoList.todoList, idTask: id });
};

const updateTodo = (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndUpdate(id, { content: req.body.content }, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/todo");
  });
};

const removeTodo = async (req, res) => {
  const id = req.params.id;
  await Todo.findByIdAndRemove(id)

  const user =  await User.findOne({_id: req.user.user._id})
  user.todoList.splice(id, 1);
  user.save();

  res.redirect("/todo");
};

const saveTodo = async (req, res) => {
  const todoTask = await new Todo({
    content: req.body.content
     }).save();

  const user = await User.findOne({ _id: req.user.user._id });
  await user.addToList(todoTask._id);
  const userTodoList = await User.findOne({ _id: req.user.user._id }).populate(
    "todoList"
  );

  res.render("todo.ejs", { todoTasks: userTodoList.todoList });
};


module.exports = {
  todoMain,
  editTodo,
  updateTodo,
  removeTodo,
  saveTodo,
};
