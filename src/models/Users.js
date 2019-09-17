import uuid from 'uuid';
import jwt from 'jsonwebtoken';

class User {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
            this.users = [];
        }
        /**
         *
         * @returns {object} user object
         */
    create(data) {
        const payload = {
            email: data.email,
            isAdmin: data.isAdmin,
            role: data.role,
            first_name: data.first_name,
        };
        const token = jwt.sign(payload, 'iliketocode');
        const newUser = {
            id: uuid.v4(),
            email: data.email || '',
            role: data.role || '',
            first_name: data.first_name || '',
            mobile_number: data.mobile_number || '',
            image_url: data.image_url || '',
            sales: data.sales || '',
            isAdmin: data.isAdmin || false,
            token: `Bearer ${token}` || '',
        };
        this.users.push(newUser);
        return newUser;
    }

    /**
     * @returns {object} returns all users
     */
    findAll() {
        return this.users;
    }
    findByEmail(email) {
        return this.users.find(user => user.email === email);
    }
}
export default new User();