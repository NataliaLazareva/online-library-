var express = require('express');
const ForReaders=require('../controllers/ForReaders.js');

const InfReaders = express.Router();

InfReaders.get("/", ForReaders.main);
InfReaders.get("/readingRooms", ForReaders.readingRooms);
InfReaders.get("/uslugi", ForReaders.uslugi);

module.exports = InfReaders;