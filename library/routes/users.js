var express = require('express');
// подключение контроллера, функции которого будут обработчиками
//запросов по маршруту
const user =require('../controllers/user');
// создание роутера
const users =express.Router();

// привязки функций к маршрутам
users.get("/", user.main);
users.get("/registration_icon", user.getRegistration);
users.post("/registration_icon", user.postRegistration);
users.get("/authentification_icon", user.getAuthentification);
users.post("/authentification_icon", user.postAuthentification);

// экспорт созданного роутера
module.exports = users;
