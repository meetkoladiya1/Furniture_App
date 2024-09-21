const productSchema = require("../../models/product.model");

module.exports= class productServices{
    async addNewProduct(body){
        try {
            return await productSchema.create(body);
        } catch (error) {
            console.log({error,message:"Error is F-product add-service"});
            return error.message;  
        } 
    }
    async getAllProduct(body){
        try {
            return await productSchema.find(body);
        } catch (error) {
            console.log({error,message:"Error is F-get all product service"});
            return error.message;
        }
    };

    async getProduct(body){
        try {
            return await productSchema.findOne(body);
        } catch (error) {
            console.log({error,message:"Error is F-get product service"});
            return error.message;
        }
    };

    async getProductById(id){
        try {
            return await productSchema.findById(id);
        } catch (error) {
            console.log({error,message:"Error is get ID product service"});
            return error.message;
        }
    };

    async updateProduct(id,body){
       try {
        return await productSchema.findByIdAndUpdate(id,{$set : body},{new:true});
       } catch (error) {
        console.log({error,message:"Error is update product service"});
            return error.message;
       }
    }

};