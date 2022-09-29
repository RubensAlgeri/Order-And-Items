import Item from "./Item";

export default class TaxItem extends Item {
    constructor(category, description, price, tax){
        super(category, description, price)
        this.tax = tax;
    }
    calculateTax(price, tax){
        console.log(this.tax)
        return price*tax;
    }
}