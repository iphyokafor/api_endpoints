//  server.js
// const express = require('express')

import express from 'express';

const app = express()

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send({
        'message': 'Welcome!'
    });
})


app.listen(5500)

console.log('Server running on port', 5500);

// import User from './src/controllers/users';
import Product from './src/controllers/products';
// import Sale from './src/controllers/sales';

// app.post('/api/v1/Users', User.addPost);
// app.get('/api/v1/Users', User.getAll);
app.post('/api/v1/Products', Product.addPost);
app.get('/api/v1/Products', Product.getAll);
app.get('/api/v1/Products/:id', Product.getOne);
// app.post('/api/v1/Sales', Sale.addPost);
// app.get('/api/v1/Sales', Sale.getAll);
// app.get('/api/v1/Sales/:id', Sale.getOne);