module.exports = class BanksItm {
    /*
    #bName;
    #iRate;
    #mxLoan;
    #mnDwnPayment;
    #mxLnTerm;
    */
    constructor (){
      
      this.bName = new String("TT");
      this.iRate = 15;
      this.mxLoan = 100000;
      this.mnDwnPayment = 20;
      this.mxLnTerm = 60;
    }
    /*
    //bank name getter/setter
    get bankName() {
        return this.#bName;
    }
    set bankName(bN){
        this.#bName = String().toUpperCase(bN);
    }
  
    get interestRate() {
        return this.#iRate;
    }
    set interestRate(iRt){
        this.#iRate = iRt;
    }
    
    //Maximum loans getter/setter
    get maxLoan(){
        return this.#mxLoan;
    }
    set maxLoan(mxLn){
        this.#mxLoan = mxLn;
    }
  
    //Minimum down payment getter/setter
    get minDownPayment(){
        return this.#mnDwnPayment;
    }
    set minDownPayment(mnDnPnt){
        this.#mnDwnPayment = mnDnPnt;
    }
    
    //maximum loan term
    get maxLoanTerm(){
        return this.#mxLnTerm;
    }
    set maxLoanTerm(mxLTrm){
        this.#mxLnTerm = mxLTrm;
    }
    */
    set newValue(nv){
        this.bName = nv.bName;
        this.iRate = nv.iRate;
        this.mnDwnPayment = nv.mnDwnPayment;
        this.mxLnTerm = nv.mxLnTerm;
        this.mxLoan = nv.mxLoan;
        console.log('Fron new Value');
        console.log(this);
    }


    toHTMLTableRow() {
        let rs = '<tr><td>' + this.bName + '</td><td>' + this.iRate + '</td><td>' + this.mxLoan + '</td><td>' + this.mnDwnPayment + '</td><td>' + this.mxLnTerm + '</td></tr>';
        return rs;
    }
}