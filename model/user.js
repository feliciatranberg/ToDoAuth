const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: String,
  tokenExpiration: Date,
  todoList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo"
    },
  ],
});

userSchema.methods.addToList = async function(todoTasksId) {
  this.todoList.push(todoTasksId)
  await this.save();
}

const User = mongoose.model("user", userSchema);

module.exports = User;
