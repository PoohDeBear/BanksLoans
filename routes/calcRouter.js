const express = require("express");
const app = express();
const calcRouter = express.Router();

const baseController = require('../controllers/baseController.js');

calcRouter.use('/', baseController.calc);

exports.calcRouter;