//const fs = require('fs');
const BanksList = require('../models/BanksList.js');
const BanksItm = require('../models/BanksItm.js');
const bLst = global.banksList;

function MonthlyPayment(ln,dp,ir,mnths) {
  let mp = 0.0;
  let irpm = ir / (100 * 12.0);
  let lnpcnt = Math.pow((1 + irpm),mnths);
  let ab = ln * (1 - (dp /100));
  mp = (ab * irpm * lnpcnt) / (lnpcnt - 1);
  mp = Math.round(mp * 100) / 100;
  return mp;
}

function Anuit(ln,dp,ir,mnths) {
    let mp = 0.0;
    let irpm = ir / (100 * 12.0);
    let osk = ln * irpm;
    let lnpcnt = Math.pow((1 + irpm),(mnths * -1));
    let ab = osk / (1 - lnpcnt);
    mp = Math.round(ab * 100) / 100;
    return mp;
  }

exports.indexPg = function(request, response) {
    let bl = [];
    global.banksList.getList.forEach(bi => {
        bl.push(bi.bName);
    });
    response.render('index.hbs', {bList:bl});
}

exports.calcPg = function(request, response) {
    let bankName = request.query.bName;
    let dnPmnt = request.query.DwnPayment;
    let lnTrm = request.query.LnTerm;
    let mxLn = request.query.mxLoan;
    var bi = new BanksItm();
    if (global.banksList.hasItem(bankName)) {
        bi = global.banksList.selectItm(bankName);
    }
    if ( dnPmnt == undefined) {
        dnPmnt = bi.mnDwnPayment;
    }
    if ( lnTrm == undefined) {
        lnTrm = bi.mxLnTerm;
    }
    if ( mxLn == undefined) {
        mxLn = bi.mxLoan;
    }
    let pmloan = MonthlyPayment(mxLn,dnPmnt,bi.iRate,lnTrm);
    response.render('Calculate.hbs', {rs:bi,bloan:pmloan,DwnPayment:dnPmnt,LnTerm:lnTrm,LnTerm:lnTrm,mrtgg:mxLn});
}

