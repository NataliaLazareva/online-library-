// технология создания ORM
const Sequelize=require("sequelize");
// подключение к базе данных
const sequelize=new Sequelize("library","root","root",
    {dialect:"mysql", host:"localhost", define:{timestamps:false}});

// создание модели
const Model=sequelize.define("model",
    {
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
        },

        DateOfIssue: {
            type: Sequelize.DATE,
            allowNull:false
        },

        ExpectedReturnDate: {
            type: Sequelize.DATE,
            allowNull:false
        },

        CodeNumber: {
            type: Sequelize.INTEGER,
            allowNull:false
        },

        CardNumberOfLibrary: {
            type: Sequelize.BIGINT,
            allowNull:false
        },

        IssueNumber: {
            type:Sequelize.INTEGER,
            autoIncrement:false,
            primaryKey: true,
            allowNull:false
        },

        BookCode:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true,
            allowNull:false
        },

        LibraryСardNumber:{
            type:Sequelize.BIGINT,
            autoIncrement:true,
            primaryKey: true,
            allowNull:false
        }
    });

// синхронизация с базой данных
sequelize.sync().then(()=>{console.log("База данных синхронизирована")});

// экспорт построенной модели
module.exports=Model;