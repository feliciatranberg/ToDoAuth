const { findOne } = require("../model/todo");
const Todo = require("../model/todo");
const User = require("../model/user");

//  const todoMain = (req, res)=>{
//         Todo.find({}, (err, tasks) => {
//             res.render("todo.ejs", { todoTasks: tasks });
//             });
//         };

    const todoMain = async (req, res)=> {

    const userTodoList = await User.findOne({_id:req.user.user._id}).populate("todoList");
            
    console.log(userTodoList)

    res.render("todo.ejs", { todoTasks: userTodoList.todoList});
        };

    //    const addTodo = async (req, res) => {
    //         const todoTask = new Todo({
    //         content: req.body.content
    //         });
    //         console.log(todoTask)
    //         try {
    //         await todoTask.save();
    //         res.redirect("/todo");
    //         } catch (err) {
    //         res.redirect("/todo");
    //         }
    //         };

    // test
    const editTodo = async (req, res) => {
        const id = req.params.id;
        const userTodoList = await User.findOne({_id:req.user.user._id}).populate("todoList");
        res.render("todoEdit.ejs", { todoTasks: userTodoList.todoList, idTask: id});
         };
            
            // const editTodo = (req, res) => {
            //     const id = req.params.id;
            //     Todo.find({}, (err, tasks) => {
            //     res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
            //      });
            //     }

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

                    const saveTodo = async (req, res) => {

                        const todoTask = await new Todo({
                            content: req.body.content
                            }).save()
                        
                        const todoTasksId = todoTask._id

                        const user = await User.findOne({_id:req.user.user._id})
                        user.addToList(todoTasksId);
                        const userTodoList = await User.findOne({_id:req.user.user._id}).populate("todoList");
                        // console.log(userTodoList.todoList)
                        res.render("todo.ejs", {todoTasks:userTodoList.todoList})
                    }
                    

module.exports= {
    todoMain, 
    editTodo,
    updateTodo,
    removeTodo,
    saveTodo
}