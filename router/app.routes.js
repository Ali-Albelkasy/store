const app = require('express').Router();

app.post('/register',require('../controller/register.controller'))

app.post('/login', require('../controller/login.controller'))

// app.get('/home', require('../controller/home.controller'))
// app.get('/cartPro', require('../controller/cart.controllers').cartPro)
// app.post('/addToCart/:id', require('../controller/cart.controllers').addToCart)
// app.post('/deleteFromCart/:id', require('../controller/cart.controllers').deleteFromCart)
module.exports = app