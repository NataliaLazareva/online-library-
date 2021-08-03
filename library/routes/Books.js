var express = require('express');
const BookList=require('../controllers/BookList.js');

const Books = express.Router();

Books.get("/", BookList.main);
Books.get("/BookList/:page/:card", BookList.GetBookList);

module.exports = Books;