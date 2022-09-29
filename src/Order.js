export default class Order {
    constructor() {
        this.items = [];
    }
    addItem(item){
        this.items.push(item)
    }
    getTotal(){
        let total = 0;
        this.items.forEach(item => {
            total+=item.price;
        });
        return total;
    }
    getTaxes(){
        let totalTaxes = 0;
        this.items.forEach(item => {
            if(item.category==='Beer'){
                totalTaxes+=item.price*0.2;
            }
            if(item.category==='Cigar'){
                totalTaxes+=item.price*0.25;
            }
            if(item.category==='Eletronics'){
                totalTaxes+=item.price*0.30;
            }
        });
        return totalTaxes;
    }
}
