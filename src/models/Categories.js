import uuid from 'uuid';

class Category {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
            this.categories = [];
        }
        /**
         * 
         * @returns {object} category object
         */
    create(data) {
        const newProduct = {
            id: uuid.v4(),
            name: data.name || '',
            image_url: data.image_url || '',
            short_desc: data.short_desc || ''
        };
        this.categories.push(newCategory);
        return newCategory
    }

    /**
     * @returns {object} returns all categories
     */
    findAll() {
        return this.categories;
    }

}
export default new Category();