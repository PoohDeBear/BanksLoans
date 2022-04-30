const express = require('express');
const baseRouter = express.Router();

const baseController = require('../controllers/baseController.js');

baseRouter.use('/calculate', baseController.calcPg);
baseRouter.use('/', baseController.indexPg);

baseRouter.controller = baseController;

module.exports = baseRouter;