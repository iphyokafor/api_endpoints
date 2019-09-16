import SaleModel from '../models/Sales';

const Sale = {
    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} sale object 
     */
    addPost(req, res) {
        if (!req.body.price) {
            return res.status(400).json({
                'status': 'failed',
                'message': 'All fields are required'
            })
        }
        const data = SaleModel.create(req.body);
        return res.status(201).json({
            'status': 'success',
            'message': 'Sales added successfully',
            data: data
        });
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {object} sales array
     */
    getAll(req, res) {
        const data = SaleModel.findAll();
        return res.status(200).json({
            'status': 'success',
            'message': 'View all sales',
            data: data
        });
    },

    getOne(req, res) {
        const sale = SaleModel.findOne(req.params.id);
        if (!sale) {
            return res.status(404).send({ 'message': 'sales not found' });
        }
        return res.status(200).send(sale);
    },
}

export default Sale;