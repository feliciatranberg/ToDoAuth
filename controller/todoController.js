const Todo = require("../model/todo");
const User = require("../model/user");

 const todoMain = (req, res)=>{
        Todo.find({}, (err, tasks) => {
            res.render("todo.ejs", { todoTasks: tasks });
            });
        };

       const addTodo = (req, res) => {
            const todoTask = new Todo({
            content: req.body.content
            });
            try {
            todoTask.save();
            res.redirect("/todo");
            } catch (err) {
            res.redirect("/todo");
            }
            };
            
            const editTodo = (req, res) => {
                const id = req.params.id;
                Todo.find({}, (err, tasks) => {
                res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
                 });
                }

                const updateTodo = (req, res) => {
                const id = req.params.id;
                Todo.findByIdAndUpdate(id, { content: req.body.content }, err => {
                if (err) return res.send(500, err);
                res.redirect("/todo");
                });
                };
                
               const removeTodo = (req, res) => {
                    const id = req.params.id;
                    Todo.findByIdAndRemove(id, err => {
                    if (err) return res.send(500, err);
                    res.redirect("/todo");
                    });
                    };
  
const addToShoppingCart = async(req, res) => {
    
    //req.params.id
    const todoId = req.params.id
    // vi ska spara course Id in i user collection
    const user = await User.findOne({_id:req.user.user._id})
  // console.log(user)
    // hur ska vi spara detta 
   user.addToCart(todoId);
   //console.log(user);

  const userWithTodoData = await User.findOne({_id:req.user.user._id}).populate("shoppingCart");

  console.log(userWithTodoData.shoppingCart)
  res.render("todo.ejs", {cartItem:userWithTodoData.shoppingCart, err:" " })
}

module.exports= {
    todoMain, 
    addTodo,
    editTodo,
    updateTodo,
    removeTodo,
    addToShoppingCart
}