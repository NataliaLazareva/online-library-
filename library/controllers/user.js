const reader=require("../models/reader")
const readerinformation=require("../models/readerinformation")

exports.main = function (request, response){
    response.render("main_paint");
};

/*/registration_icon*/
exports.getRegistration = function(req, res){
    res.render("registration_icon.hbs");
};

exports.postRegistration = function(request,response) {
    const name = request.body.name;
    const phone = request.body.phone;
    const address = request.body.address;
    const datebirth = request.body.datebirth;
    const login = request.body.login;
    const psw = request.body.psw;
    const psw_repeat = request.body.psw_repeat;

    if (psw != psw_repeat) {
        response.send('Проверьте правильность итогового пароля');
        response.redirect("/registration_icon");
    }
    else {
        СardNumber = Math.floor(Math.random() * (1000 - 10)) + 10;
        Mark = 0;

        reader.create({Name: name, LibraryСardNumber: СardNumber}).catch(err => console.log(err));

        readerinformation.create({
            Num: СardNumber,
            Name: name,
            PhoneNumber: phone,
            Address: address,
            RetirementMark: Mark,
            LibraryСardNumber: СardNumber,
            DateOfBirth: datebirth,
            Login: login,
            Password: psw}).then(
            () => {
                response.redirect("/registration_icon");
            }).catch(err => console.log(err));
    }
};

/*/authentification_icon*/
exports.getAuthentification = function(req, res){
    res.render("authentification_icon.hbs");
};

exports.postAuthentification = function(request,response)
{
    if(!request.body) response.sendStatus(400);
    const login=request.body.log;
    const psw=request.body.psw;
    readerinformation.findAll({where: {Login:login, Password:psw}, raw: true}).then(
        data => {
            response.render("LK.hbs", {
                data:data[0] });}).catch(err => console.log(err))
}
