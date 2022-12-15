module.exports.Order = class Order {
  constructor() {
    this.items = []
  }

  addItem(newItem) {
    this.items.push(newItem)
  }

  calculateTotal() {
    const { total, items } = this.items.reduce((summary, item) => ({
      total: summary.total += item.calculateTotal(),
      items: summary.items += item.quantity
    }), { total: 0, items: 0 })

    if (items > 100) {
      return total - (total * 0.1)
    }

    return total
  }
}
