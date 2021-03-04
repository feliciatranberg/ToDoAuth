const {todoMain, editTodo, updateTodo, removeTodo, saveTodo} = require("../controller/todoController");
const express = require("express");
const verifyUser = require("../middleware/verifyUser")

const router = express.Router();

router.get("/todo", verifyUser, todoMain)
router.post('/todo', verifyUser, saveTodo)
router.get("/edit/:id", verifyUser, editTodo)
router.post("/edit/:id", verifyUser, updateTodo)
router.get("/remove/:id", verifyUser, removeTodo)

module.exports = router;