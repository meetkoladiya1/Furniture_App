const Product = require('../../models/product.model');

module.exports = class productServices {
    // get all products
    async getAllProduct(query) {
        try {
            let condition = { isDelete: false }
            return Product.find({ ...condition }).select({
                title: 1,
                price: 1,
                profile:1
            });
        } catch (error) {
            console.log({ error, message: "Error is in get all products-service" });
            return error.message;
        }
    };

    // async getallproducts(body){
    //     return Product.find(body)
    // }

    // get specific product
    async getspecificProduct(body) {
        try {
            return Product.findOne(body);
        } catch (error) {
            console.log({ error, message: "Error is in get specific products-service" });
            return error.message;
        }
    }
}