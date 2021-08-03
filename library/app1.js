const express = require('express');
const path = require('path');
const bodyParser=require('body-parser');
// подключение модулей с роутерами
const userRouter=require('./routes/user');
const homeRouter=require('./routes/aboutRouter');

// создание объекта-приложения
var app = express();

// регистрация
app.set("view engine","hbs");
app.use(bodyParser.urlencoded({extended:false}));

// регистрация роутеров и их привязка к подмаршрутам
// верхнего уровня
app.use("/authentification_icon", userRouter);
app.use("/", homeRouter);

app.use(function (req,res,next) {
    res.status(404).send("Not found");
});

app.listen(3000, function(err){
    if(err) console.log(err);
    else console.log('сервер запущен');
});