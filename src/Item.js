export default class Item {
    constructor(description, price) {
        this.description = description;
        this.price = price;
        this.type = 'item';
        if(this.constructor === Item){
            throw new Error("Can't instantiate abstract class!")
        }
    }
}