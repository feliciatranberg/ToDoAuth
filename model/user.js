
const mongoose = require("mongoose");

//name, email, password , 
// role: Boolean, true -> lärare  
const userSchema = new mongoose.Schema({

    name: {type:String, required:true, unique: true},
    email: {type:String, required:true, unique: true},
    password:{type:String, required:true},
    role: String, 
    token:String,
    tokenExpiration: Date,
    shoppingCart: [
        {
            type:mongoose.Schema.Types.ObjectId, 
            ref: "todo"
        }
    ]

})
//hur ska vi lagra detta 
// mongoose enga metoder för att kunna hantera detta 

userSchema.methods.addToCart = function(todoId) {
 // pushar in i shoppingCart 
   this.shoppingCart.push(todoId)
// Filtera data så att användare inte ska kunna lägga till samma course två gånger
   this.save();
}

const User = mongoose.model("user", userSchema)


module.exports = User; 