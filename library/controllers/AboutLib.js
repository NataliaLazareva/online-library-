exports.main = function (request, response){
    response.render("main_paint");
};
exports.history = function(request, response){
    response.render("libHistory");
};

exports.contacts = function(request, response){
    response.render("contacts");
};