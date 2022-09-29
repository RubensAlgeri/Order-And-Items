import Item from "./Item";

export default class TaxItem extends Item {
    constructor(description, price){
        super(description, price)
        this.tax = 0;
    }
    calculateTax(tax){
        return this.price*tax;
    }
    getTax(){
        return this.price*this.tax;
    }
}