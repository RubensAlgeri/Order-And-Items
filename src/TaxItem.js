import Item from "./Item";

export default class TaxItem extends Item {
    constructor(category, description, price, tax){
        this.tax = tax;
        super(category, description, price)
    }
    calculateTax(){
        return this.price*this.tax;
    }
}