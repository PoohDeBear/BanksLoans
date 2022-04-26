const map = new Map();

//Classes
//-----------------------------------------------------------------------
module.exports = class BanksItm {
  
    #bankName;
    #interestRate;
    #maxLoan;
    #minDownPayment;
    #maxLoanTerm;
  
    constructor (){
      this.#bankName = "test1";  
      this.#interestRate = 12;
      this.#maxLoan = 100000;
      this.#minDownPayment = 20;
      this.#maxLoanTerm = 60;
    }
    
    //bank name getter/setter
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
    
    //Maximum loans getter/setter
    get mxLoan(){
        return this.#maxLoan;
    }
    set mxLoan(mxLn){
        this.#maxLoan = mxLn;
    }
  
    //Minimum down payment getter/setter
    get mnDwnPayment(){
        return this.#minDownPayment;
    }
    set mnDwnPayment(mnDnPnt){
        this.#minDownPayment = mnDnPnt;
    }
    
    //maximum loan term
    get mxLnTerm(){
        return this.#maxLoanTerm;
    }
    set mxLnTerm(mxLTrm){
        this.#maxLoanTerm = mxLTrm;
    }
    
  }
  

module.exports = class BanksList {
	
  	constructor (){
	  let bItm = new BanksItm();
	  map.set(bItm.bName, bItm);
  	}

	set addItem(bItm){
		map.set(bItm.bName,bItm);
	}

	get getMap(){
		let lMap = map;
		return lMap;
	}

	hasItem = function(bName){
		return map.has(bName);
	}

	set editItem(bItm){
		map.set(bItm.bName,bItm);
	}


	get listInHTMLTableRows(){
	  let rs = '';
	  map.forEach( e => {
			rs = rs + '<tr><td>' + e.bName + '</td><td>' + e.iRate + '</td><td>' + e.mxLoan + '</td><td>' + e.mnDwnPayment + '</td><td>' + e.mxLnTerm + '</td></tr>';
	  });
	  return rs;
	};
	
	get mapSize(){
		return map.size;
	}

}
