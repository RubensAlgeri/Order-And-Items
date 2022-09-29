import TaxItem from "./TaxItem";

export default class Eletronics extends TaxItem {
    constructor(description, price){
        super(description, price)
        this.tax = 0.3;
        this.taxValue = this.getTax();
    }
    getTax(){
        return this.price*this.tax;
    }
}