
//import { BanksList, BanksItm } from '../models/Classes.js';
//const bnksList = BanksList();
//const bnksItm = BanksItm();

const bnksList = require('../models/Classes.js');
const bnksItm = require('../models/Classes.js');


exports.listing = function (request, response) {
  response.send('Banks datas list');
}

exports.addBank = function (request, response) {
  response.send('Add new banks record');
}

exports.editBank = function (request, response) {
    response.send('Edit banks record');
  }
  