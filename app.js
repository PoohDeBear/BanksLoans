const fs = require('fs');
const express = require('express');
const app = express();
/*
exports.banksList = function(request, responce){
  responce.render('Banks.hbs')
}

exports.addBank = function(request, responce){
  responce.render('CreateBankForm.hbs')
}
*/
//-----------------------------------------------------------------------

let appResponce = new String;

//Routers for adresses with "/banks" start

const bankRouter =  require('./routes/banksRouter.js');
app.use('/banks', bankRouter);

//Main page
//const calcRouter = require('./routes/calcRouter.js');

const baseController = require('./controllers/baseController.js');

app.use('/', baseController.calc);

// Error
app.use(function (err, request, response, next) {
  console.log('error ${err}');
  response.status(500).send('Something wrong...');
  next();
});


app.listen(7000);