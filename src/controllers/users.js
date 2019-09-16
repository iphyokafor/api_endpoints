import UserModel from '../models/Users';

const User = {
    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} user object 
     */
    addPost(req, res) {
        if (!req.body.email && !req.body.role && !req.body.first_name && !req.body.mobile_number && !req.body.image_url && !req.body.sales) {
            return res.status(400).json({
                'status': 'failed',
                'message': 'All fields are required'
            })
        }
        const data = UserModel.create(req.body);
        return res.status(201).json({
            'status': 'success',
            'message': 'User added successfully',
            data: data
        });
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {object} users array
     */
    getAll(req, res) {
        const data = UserModel.findAll();
        return res.status(200).json({
            'status': 'success',
            'message': 'View all users',
            data: data
        });
    },
}

export default User;