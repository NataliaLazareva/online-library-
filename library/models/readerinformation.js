// технология создания ORM
const Sequelize=require("sequelize");
// подключение к базе данных
const sequelize=new Sequelize("library","root","root",
    {dialect:"mysql", host:"localhost", define:{timestamps:false}});

// создание модели
const readerinformation = sequelize.define("readerinformation",
    {
        Num:{
            type:Sequelize.BIGINT,
            autoIncrement:true,
            primaryKey: true,
            allowNull:false
        },

        Name:{
            type:Sequelize.STRING,
            allowNull:false
        },

        PhoneNumber:{
            type:Sequelize.STRING,
            allowNull: false
        },

        Address:{
            type:Sequelize.STRING,
            allowNull:false
        },

        RetirementMark:{
            type:Sequelize.BOOLEAN,
            allowNull:true
        },

        LibraryCardNumber:{
            type:Sequelize.BIGINT,
            autoIncrement:false,
            primaryKey: true,
            allowNull:false
        },

        DateOfBirth: {
            type: Sequelize.DATE,
            allowNull:false
        },

        Login: {
            type: Sequelize.STRING,
            allowNull:false
        },

        Password: {
            type: Sequelize.STRING,
            allowNull:false
        }
    });

// синхронизация с базой данных
sequelize.sync().then(()=>{console.log("База данных синхронизирована")});

// экспорт построенной модели
module.exports=readerinformation;