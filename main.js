const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const userRouter = require('./router/userRoute');
const homeRouter = require('./router/homeRoute');
const todoRouter = require('./router/todoRoute');

require('dotenv').config();

const app = express();

// app middlewares
app.set('view engine', 'ejs');

// parsa/konventera json data till js och tvärtom 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//läser cookies
app.use(cookieParser());

// router middlewares
app.use(userRouter);
app.use(homeRouter);
app.use(todoRouter);

mongoose.connect(process.env.DATABASE_URL, 
{useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false,
    useCreateIndex: true},
     (err)=> {

if(err) {      
console.log(err) 
return 
}

app.listen(7700, ()=>{
    console.log('ALLT E GÖTT')
})
})

