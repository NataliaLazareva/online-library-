var express = require('express');
const AboutLib=require('../controllers/AboutLib.js');

const aboutRouter = express.Router();

aboutRouter.get("/", AboutLib.main);
aboutRouter.get("/libHistory", AboutLib.history);
aboutRouter.get("/contacts", AboutLib.contacts);

module.exports = aboutRouter;