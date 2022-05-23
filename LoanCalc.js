const express = require('express');
const app = express();
const BanksList = require('./models/BanksList.js');
global.banksList = new BanksList();
const BanksItm = require('./models/BanksItm.js');
var bListItm = new BanksItm();
bListItm.bName = "PB";
bListItm.iRate = 35;
bListItm.mnDwnPayment = 30;
bListItm.mxLnTerm = 84;
bListItm.mxLoan = 2000000;
global.banksList.addItem(bListItm);
//let appResponce = new String;

//Routers for adresses with "/banks" start
const banksRouter =  require('./routes/banksRouter.js');
app.use('/banks', banksRouter);

//Main page routing
const baseRouter = require('./routes/baseRouter.js');
app.use('/', baseRouter);

// Error
app.use(function (req, res, next) {
  
  res.status(404).send("Not Found");
});

app.listen(5000);