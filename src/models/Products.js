import uuid from 'uuid';
import fs from 'fs';

class Product {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
            this.products = [];
        }
        /**
         * 
         * @returns {object} product object
         */
    create(data) {
        const newProduct = {
            id: uuid.v4(),
            name: data.name || '',
            category: data.category || '',
            price: data.price || '',
            quantity: data.quantity || '',
            description: data.description || '',
            image_url: data.image_url || ''
        };
        this.products.push(newProduct);
        return newProduct
    }


    /**
     * @returns {object} returns all products
     */
    findAll() {
        return this.products;
    }

    findOne(id) {
        return this.products.find(product => product.id === id);
    }
}

export default new Product();