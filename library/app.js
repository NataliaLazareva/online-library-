const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const hbs = require("hbs");
/*const morgan = require("morgan");

const session = require('express-session');*/

const app = express();
/*app.use(bodyParser.json());*/
const urlencodedParser = bodyParser.urlencoded({extended: false});

const aboutRouter=require('./routes/aboutRouter');
const InfReaders=require('./routes/InfReaders');
/*const users=require('./routes/users');*/
/*const Books=require('./routes/Books');*/


const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "library",
  password: "root"
});

/*app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret: secretkey'', }))*/

app.use("/", aboutRouter);
app.use("/", InfReaders);
/*app.use("/", users);
app.use("/", Books);*/

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static('public'));

/*app.get("/", function(req, res){
  res.render("main_paint.hbs");
});*/

app.get("/registration_icon", function(req, res){
  res.render("registration_icon.hbs");
});

app.post("/registration_icon",urlencodedParser, function(request,response) {
  const name = request.body.name;
  const phone = request.body.phone;
  const address = request.body.address;
  const datebirth = request.body.datebirth;
  const login = request.body.login;
  const psw = request.body.psw;
  const psw_repeat = request.body.psw_repeat;

  СardNumber = Math.floor(Math.random() * (1000 - 10)) + 10;
  Mark = 0;

  if (psw!=psw_repeat) {
    response.send('Проверьте правильность итогового пароля');
    response.redirect("/registration_icon");
  }
  else {

  pool.query("INSERT INTO reader(Name) VALUES (?)",
      [name],
      function(err, data) {
        if(err) return console.log(err);
      });

  pool.query("INSERT INTO readerinformation('Num', Name, PhoneNumber, Address, RetirementMark, LibraryСardNumber, DateOfBirth, Login, Password)" +
      " VALUES (?,?,?,?,?,?,?,?,?)",
      [СardNumber, name, phone, address, 0, СardNumber, datebirth, login, psw],
      function(err, data) {
        if(err) return console.log(err);
        response.redirect("/registration_icon.hbs");      });
  response.redirect("authentification_icon");}
});

app.get("/authentification_icon", function(req, res){
  res.render("authentification_icon.hbs");
});

app.post("/authentification_icon",urlencodedParser, function(request,response)
{
  if(!request.body) response.sendStatus(400);
  const login=request.body.log;
  const  psw=request.body.psw;

  pool.query("select * FROM readerinformation where readerinformation.Login=? and readerinformation.Password=?",
      [login, psw], function(err, data) {
        if(err) return console.log(err);
        response.render("LK.hbs", {
          data:data[0]
        });
  });
});

app.get("/BookList/:page/:card", function(req, res){
  let num = 7;
  let page = req.params.page;
  let card = req.params.card;
  let start = (page-1)*num;
  let end = start + num;

  pool.query("select booklist.NameOfAuthor, booklist.NameOfBook, booklist.NumberOfCopies from booklist",
      function(err, data) {
        if(err) return console.log(err);
        let value = data.slice(start, end);
        let countOfItems = Math.ceil(data.length/num);
        res.render("BookList.hbs", {
          nums: card,
          book: value,
          Count: countOfItems
        });
      });
});

app.get("/history/:card", function(req, res){
  let card = req.params.card;
  pool.query("select bookdelivery.DateOfIssue, bookdelivery.ExpectedReturnDate,  bookcopy.Name, tableofissuedbooks.CodeNumber" +
      "  from library.bookdelivery,\n" +
      "  library.bookcopy, library.tableofissuedbooks \n" +
      "  where bookdelivery.СardNumberOfLibrary = ? and library.bookdelivery.IssueNumber = tableofissuedbooks.IssueNumber" +
      " and CodeNumber = BookCode;",[card], function(err, data) {
    if(err) return console.log(err);
    res.render("history.hbs", {
      data:data,
    });
  });
});

/*app.use(function (req,res,next) {
  res.status(404).send("Not found");
});*/

app.listen(3000, (err)=>{
  return console.log("сервер ожидает подключения");
  if(err)
    return console.log('error', err)
});