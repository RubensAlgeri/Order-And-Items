import TaxItem from "./TaxItem";

export default class Cigar extends TaxItem {
    constructor(description, price){
        super(description, price)
        this.tax = 0.25;
        this.taxValue = this.getTax();
    }
    getTax(){
        return this.price*this.tax;
    }
}