//import { BanksList, BanksItm } from '../models/Classes.js';

const fs = require('fs');
const bnksList = require('../models/Classes.js');
const bnksItm = require('../models/Classes.js');
//const bnksList = BanksList();
//const bnksItm = BanksItm();

exports.calc = function (request, response) {
    let rs = bnksList.listInHTMLTableRows;
    fs.read('../templates/Banks.html', function(error, data){
        data = data.replace("{appResponse}", rs);
        response.(data);
    })
    //response.render('Banks.hbs', {appResponce = bnksList.listInHTMLTableRows});
}

/*
exports.errorMsg = function (err, request, response, next) {
    console.log(`Error : ${err}`);
    response.status(500).send("<h1> This page not found (( </h1>");
    next();
}
*/
