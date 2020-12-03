const express = require('express');
const productCrtl = require('./controllers/productsController');
const cartCtrl = require('./controllers/cartController')

const app = express()
const SERVER_PORT = 5000

app.use(express.json())

app.get('/api/products', productCrtl.getAllProducts)

app.get('api/cart', cartCtrl.getCart)
app.post('/api/cart', cartCtrl.addToCart)
app.put('/api/cart/:cart_id', cartCtrl.changeQuantity)
app.delete('/api/cart/:cart_id', cartCtrl.removeFromCart)
app.delete('/api/cart', cartCtrl.checkout)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))