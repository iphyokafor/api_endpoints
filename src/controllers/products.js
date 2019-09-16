import ProductModel from '../models/Products';

const Product = {
    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} product object 
     */
    addPost(req, res) {
        if (!req.body.name && !req.body.category && !req.body.price && !req.body.quantity && !req.body.description && !req.body.image_url) {
            return res.status(400).json({
                'status': 'failed',
                'message': 'All fields are required'
            })
        }
        const data = ProductModel.create(req.body);
        return res.status(201).json({
            'status': 'success',
            'message': 'Product added successfully',
            data: data
        });
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {object} products array
     */
    getAll(req, res) {
        const data = ProductModel.findAll();
        return res.status(200).json({
            'status': 'success',
            'message': 'View all products',
            data: data
        });
    },

    // getOne(req, res) {
    //     const product = ProductModel.findOne(req.params.id);
    //     if (!product) {
    //         return res.status(404).send({
    //             'message': 'product not found',
    //         });
    //     }
    //     return res.status(200).send(product);
    // },

    getOne(req, res) {
        const product = ProductModel.findOne(req.params.id);
        if (!product) {
            return res.status(404).send({ 'message': 'product not found' });
        }
        return res.status(200).send(product);
    },
}

export default Product;