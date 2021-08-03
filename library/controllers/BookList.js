const booklist=require("../models/booklist")

exports.main = function (request, response){
    response.render("main_paint");
};

/*/BookList/:page/:card*/
exports.GetBookList = function(request, response){
        let num = 7;
        let page = request.params.page;
        let card = request.params.card;
        let start = (page-1)*num;
        let end = start + num;

        booklist.findAll({raw:true}).then(
           (data)=>{
               let value = data.slice(start, end);
               let countOfItems = Math.ceil(data.length/num);
               console.log(countOfItems);
               response.render("BookList.hbs",{
                 nums: card,
                 book: value,
                 Count: countOfItems});}
        ).catch(err=>console.log(err));
};