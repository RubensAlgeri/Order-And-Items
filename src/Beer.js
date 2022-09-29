import TaxItem from "./TaxItem";

export default class Beer extends TaxItem {
    constructor(description, price){
        super(description, price)
        this.tax = 0.2;
        this.taxValue = this.getTax();
    }
    getTax(){
        return this.price*this.tax;
    }
}