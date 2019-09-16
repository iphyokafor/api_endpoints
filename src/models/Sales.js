import uuid from 'uuid';

class Sale {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
            this.sales = [];
        }
        /**
         * 
         * @returns {object} sale object
         */
    create(data) {
        const newSale = {
            id: uuid.v4(),
            price: data.price || ''
        };
        this.sales.push(newSale);
        return newSale
    }

    /**
     * @returns {object} returns all sales
     */
    findAll() {
        return this.sales;
    }

    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} reflection object
     */

    findOne(id) {
        return this.sales.find(sale => sale.id === id);
    }


}
export default new Sale();