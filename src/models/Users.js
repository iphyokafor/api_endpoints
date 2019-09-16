import uuid from 'uuid';

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
        const newUser = {
            id: uuid.v4(),
            email: data.email || '',
            role: data.role || '',
            first_name: data.first_name || '',
            mobile_number: data.mobile_number || '',
            image_url: data.image_url || '',
            sales: data.sales || ''
        };
        this.users.push(newUser);
        return newUser
    }

    /**
     * @returns {object} returns all users
     */
    findAll() {
        return this.users;
    }

}
export default new User();