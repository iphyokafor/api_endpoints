import CategoryModel from '../models/Categories';

const Category = {
    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} category object 
     */
    addPost(req, res) {
        if (!req.body.name && !req.body.image_url && !req.body.short_desc) {
            return res.status(400).json({
                'status': 'failed',
                'message': 'All fields are required'
            })
        }
        const data = CategoryModel.create(req.body);
        return res.status(201).json({
            'status': 'success',
            'message': 'Category added successfully',
            data: data
        });
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {object} categories array
     */
    getAll(req, res) {
        const data = CategoryModel.findAll();
        return res.status(200).json({
            'status': 'success',
            'message': 'View all products',
            data: data
        });
    },
}

export default Category;