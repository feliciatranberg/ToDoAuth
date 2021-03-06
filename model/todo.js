const mongoose = require('mongoose');

const todoTaskSchema = new mongoose.Schema({
content: { type: String, required: true},
date: { type: Date, default: Date.now } 
})

const Todo = mongoose.model('Todo',todoTaskSchema)

module.exports = Todo;