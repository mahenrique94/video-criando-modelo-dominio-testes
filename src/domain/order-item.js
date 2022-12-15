module.exports.OrderItem = class OrderItem {
  constructor(name, quantity, price) {
    this.name = name
    this.quantity = quantity
    this.price = price
  }

  calculateTotal() {
    return this.quantity * this.price
  }
}
