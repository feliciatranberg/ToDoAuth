//  const todoMain = (req, res)=>{
//         Todo.find({}, (err, tasks) => {
//             res.render("todo.ejs", { todoTasks: tasks });
//             });
//         };

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

          // const editTodo = (req, res) => {
            //     const id = req.params.id;
            //     Todo.find({}, (err, tasks) => {
            //     res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
            //      });
            //     }

            const removeTodo = (req, res) => {
                const id = req.params.id;
                Todo.findByIdAndRemove(id, err => {
                if (err) return res.send(500, err);
                res.redirect("/todo");
                ;}
                );}

                

                let unique = [...new Set(names)];
console.log(unique); 

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
x(names); 

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}