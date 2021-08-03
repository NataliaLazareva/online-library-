// технология создания ORM
const Sequelize=require("sequelize");
// подключение к базе данных
const sequelize=new Sequelize("library","root","root",
    {dialect:"mysql", host:"localhost", define:{timestamps:false}});

// создание модели
const reader = sequelize.define("reader",
    {
        Name:{
            type:Sequelize.STRING,
            allowNull:false
        },

        LibraryСardNumber:{
            type:Sequelize.BIGINT,
            autoIncrement:false,
            primaryKey: true,
            allowNull:false
        }
    });

// синхронизация с базой данных
sequelize.sync().then(()=>{console.log("База данных синхронизирована")});

// экспорт построенной модели
module.exports=reader;