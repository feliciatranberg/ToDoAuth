const {todoMain, addTodo, editTodo, updateTodo, removeTodo, addToShoppingCart} = require("../controller/todoController");
const express = require("express");
const verifyUser = require("../middleware/verifyUser")

const router = express.Router();

router.get("/todo", verifyUser, todoMain)
router.post('/todo', verifyUser, addTodo)
router.get("/edit/:id", verifyUser, editTodo)
router.post("/edit/:id", verifyUser, updateTodo)
router.get("/remove/:id", verifyUser, removeTodo)

router.get("/addToCart/:id",verifyUser, addToShoppingCart )


module.exports = router;