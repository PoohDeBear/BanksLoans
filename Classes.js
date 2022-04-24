//const fs = require("fs");

class BanksList extends Map {
  constructor (){
	super();
  }

  addItem(bankItem){
	this.set(bankItem.bankName,bankItem);
  }

  editItem(bankName, bankItem){
	this.set(bankName,bankItem);
  }
}

class BanksItm {
	#bankName;
	#interestRate;
	#maxLoan;
	#minDownPayment;
	#maxLoanTerm;

  constructor (){
	this.#bankName = "";  
	this.#interestRate = null;
	this.#maxLoan = null;
	this.#minDownPayment = null;
	this.#maxLoanTerm = null;
  }
  
  constructor (bankName, intrstRate, maxLoan, minDwnPaymnt, maxLoanTerm) {
	this.#bankName=bankName;
	this.#interestRate=intrstRate;
	this.#maxLoan=maxLoan;
	this.#minDownPayment=minDwnPaymnt;
	this.#maxLoanTerm=maxLoanTerm;

  }

  get bName() {
	return this.#bankName;
  }
  set bName(bN){
	  this.#bankName = String.toUpperCase(bN);
  }

  get iRate() {
	return this.#interestRate;
  }
  set iRate(ir){
	  this.#interestRate = ir;
  }

  
}