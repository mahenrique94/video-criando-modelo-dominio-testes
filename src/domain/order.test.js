const t = require('tap')
const { Order } = require('./order')
const { OrderItem } = require('./order-item')

t.test('Deveria calcular o total da ordem', (t) => {
  const order = new Order()
  order.addItem(new OrderItem('First', 2, 10))

  t.equal(order.calculateTotal(), 20)
  t.end()
})

t.test('Deve dar um desconto de 10% quando a ordem tiver mais de 100 items', (t) => {
  const order = new Order()
  order.addItem(new OrderItem('First', 30, 100)) // 3000
  order.addItem(new OrderItem('Second', 45, 215)) // 9675
  order.addItem(new OrderItem('Third', 26, 312)) // 8112

  // Total sem desconto = 20787
  // Total com desconto de 10% = 18708.30
  t.equal(order.calculateTotal(), 18708.30)
  t.end()
})
