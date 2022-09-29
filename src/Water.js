import Item from "./Item";

export default class Water extends Item {
    constructor(description, price){
        super(description, price)
        this.taxValue = 0;
    }
}