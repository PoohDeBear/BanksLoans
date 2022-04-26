const express = require('express');
const app = express();
const banksRouter = express.Router();

const banksController = require('../controllers/bankController');


banksRouter.use('/addbank', banksController.addBank );

banksRouter.use('/editbank', banksController.editBank );

banksRouter.use('/', banksController.listing);

module.exports = banksRouter;