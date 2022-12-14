import Order from "./../src/Order";
import Cigar from "./../src/Cigar";
import Beer from "./../src/Beer";
import Eletronics from "./../src/Eletronics";
import Water from "./../src/Water";

test("Deve criar um pedido e calcular o total", () => {
  const order = new Order();
  order.addItem(new Beer("Brahma", 6));
  order.addItem(new Cigar("Malboro", 10));
  order.addItem(new Eletronics("IPhone 13", 13000));
  order.addItem(new Water("Crystal", 1));
  const total = order.getTotal();
  expect(total).toBe(13017);
});

test("Deve criar um pedido e calcular os impostos", () => {
  const order = new Order();
  order.addItem(new Beer("Brahma", 6));
  order.addItem(new Cigar("Malboro", 10));
  order.addItem(new Eletronics("IPhone 13", 13000));
  order.addItem(new Water("Crystal", 1));
  let taxes = 0;
  order.items.forEach((item) => {
    taxes += item.taxValue
  })
  expect(taxes).toBe(3903.7);
});
