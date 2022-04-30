
const BanksItm = require('./BanksItm.js');


module.exports = class BanksList {
	
	#map = new Map();

  	constructor (){
	  let id = this.listSize + 1;
	  let tstName = "TEST" + id;		
	  while (this.#map.has(tstName)) {
	  	++id; 
	  	tstName = "TEST" + id;
	  }
	  let bItm = new BanksItm();
	  bItm.bName = tstName;
	  bItm.iRate = 15;
	  bItm.mxLoan = 100000;
	  bItm.mxLnTerm = 60;
	  bItm.mnDwnPayment = 20;
	  this.#map.set(bItm.bName, bItm);
  	}

	addItem = function(bItm){
		this.#map.set(bItm.bName,bItm);
	  }

	get getList(){
		let lMap = this.#map;
		return lMap;
	}

	hasItem = function(bName){
		let rs = new Boolean;
		rs = this.#map.has(bName);
		return rs;
	}

	set editItem(bItm){
		this.#map.set(bItm.bankName,bItm);
	}


	listInHTMLTableRows(){
	  let rs = '';
	  this.#map.forEach( e => {
			rs += e.toHTMLTableRow;
	  });
	  console.log(rs);
	  return rs;
	};
	
	get listSize(){
		return this.#map.size;
	}

	selectItm(bankname){
		let itm = new BanksItm();
		itm = this.#map.get(bankname);
		return itm;
	}

}