import User from './src/controllers/users';
import Product from './src/controllers/products';
import Sale from './src/controllers/sales';
import isAdmin from './src/middleware/isAdmin';
import express from 'express';
import passport from 'passport';

const app = express();

app.use(passport.initialize());
require('./src/passport/passport')(passport);
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send({
        message: 'Welcome!',
    });
});
app.post('/api/v1/Users', User.addUser);
app.get('/api/v1/Users', User.getAll);
app.post(
    '/api/v1/Products',
    passport.authenticate('jwt', { session: false }),
    isAdmin,
    Product.addPost
);
app.get(
    '/api/v1/Products',
    passport.authenticate('jwt', { session: false }),
    isAdmin,
    Product.getAll
);
app.get(
    '/api/v1/Products/:id',
    passport.authenticate('jwt', { session: false }),
    isAdmin,
    Product.getOne
);
app.post('/api/v1/Sales', Sale.addPost);
app.get(
    '/api/v1/Sales',
    passport.authenticate('jwt', { session: false }),
    isAdmin,
    Sale.getAll
);
app.get('/api/v1/Sales/:id', Sale.getOne);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Started on Port : ${PORT}`);
});