import Item from "./../src/Item";
import Order from "./../src/Order";
import TaxItem from "./../src/TaxItem";

test("Deve criar um pedido e calcular o total", () => {
  const order = new Order();
  order.addItem(new Item("Beer", "Brahma", 6, 0.2));
  order.addItem(new Item("Cigar", "Malboro", 10, 0.25));
  order.addItem(new Item("Eletronics", "IPhone 13", 13000, 0.3));
  order.addItem(new Item("Water", "Crystal", 1, 0));
  const total = order.getTotal();
  expect(total).toBe(13017);
});

test("Deve criar um pedido e calcular os impostos", () => {
  const order = new Order();
  const taxItem = new TaxItem();
  order.addItem(new TaxItem("Beer", "Brahma", 6, 0.2));
  order.addItem(new TaxItem("Cigar", "Malboro", 10, 0.25));
  order.addItem(new TaxItem("Eletronics", "IPhone 13", 13000, 0.3));
  order.addItem(new TaxItem("Water", "Crystal", 1, 0));
  let taxes = 0;
  order.items.forEach((item) => {
    taxes += taxItem.calculateTax(item.price, item.tax);
  })
  expect(taxes).toBe(3903.7);
});
