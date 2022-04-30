const express = require('express');
const banksRouter = express.Router();

const bankController = require('../controllers/bankController.js');


banksRouter.use('/addbank', bankController.addBank );

banksRouter.use('/editbank', bankController.editBank );

banksRouter.use('/deletebank', bankController.deleteBank );

banksRouter.use('/', bankController.listing);

module.exports = banksRouter;