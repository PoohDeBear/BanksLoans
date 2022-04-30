const BanksList = require('../models/BanksList.js');
const BanksItm = require('../models/BanksItm.js');
const bLst = global.banksList;

exports.listing = function (request, response) {
  let bl = [];
  global.banksList.getList.forEach(bi => {
      bl.push(bi);
  });
  response.render('Banks.hbs', {bList:bl});
}

exports.addBank = function (request, response) {
  let rs = 'Add new banks record';
  response.render('Control.hbs', {msg:rs});
}

exports.editBank = function (request, response) {
    let rs = 'Edit banks recordfor ' + request.query.bName;
    response.render('Control.hbs', {msg:rs});
  }
  
  exports.deleteBank = function (request, response) {
    let rs = 'Delet banks record for ' + request.query.bName;
    response.render('Control.hbs', {msg:rs});
  }
