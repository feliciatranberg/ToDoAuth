const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const sassMiddleware = require('node-sass-middleware');

const userRouter = require('./router/userRoute');
const homeRouter = require('./router/homeRoute');
const todoRouter = require('./router/todoRoute');

require('dotenv').config();

const app = express();

const path = require('path');
app.use(sassMiddleware({ 
    src: __dirname + '/sass/', 
    dest: __dirname + '/public/stylesheets/', 
    outputStyle: 'compressed' 
  }),
)

app.use(express.static(path.join(__dirname, 'public')));
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cookieParser());

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

app.listen(process.env.PORT || 8000, ()=>{
    console.log('ALLT E GÖTT')
})
})

