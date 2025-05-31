class product{
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price : $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + (this.price * salesTax)
  }
}

const salesTax = 0.05;

const product1 = new product("shirt", 19.99)
const product2 = new product("pants", 25.50)
const product3 = new product("hoodie", 50.88)

product2.displayProduct();

const total = product2.calculateTotal(salesTax).toFixed(2)

console.log(`total = $${total}`)
