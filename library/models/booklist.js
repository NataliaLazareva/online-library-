// технология создания ORM
const Sequelize=require("sequelize");
// подключение к базе данных
const sequelize=new Sequelize("library","root","root",
    {dialect:"mysql", host:"localhost", define:{timestamps:false}});

// создание модели
const booklist = sequelize.define("booklist",
    {
        IDOfAuthor:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true,
            allowNull:true
        },

        AuthorCode: {
            type: Sequelize.INTEGER,
            allowNull:false
        },

        NameOfAuthor: {
            type: Sequelize.STRING,
            allowNull:false
        },

        NameOfBook: {
            type: Sequelize.STRING,
            allowNull:false
        },

        NumberOfCopies: {
            type: Sequelize.INTEGER,
            allowNull:false
        }
    });

// синхронизация с базой данных
sequelize.sync().then(()=>{console.log("База данных синхронизирована")});

// экспорт построенной модели
module.exports=booklist;