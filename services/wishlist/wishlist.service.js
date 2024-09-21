const wishlist = require('../../models/wishlist.model');

module.exports= class wishlistServices{
    // add wishlist
    async addToWishlist(body){
        try {
            return await wishlist.create(body);
        } catch (error) {
            console.log({error,message:"Error is in add wishlist  -service"});
            return error.message;
        }
    };

    //get wishlist
    async checkWishlist(body){
        try {
            return await wishlist.findOne(body);
        } catch (error) {
            console.log({error,message:"Error is in get wishlist service"});
            return error.message;
        }
    };

    //getall  wishlist
    async getAllWishlist(body){
        try {
            return wishlist.find(body);
        } catch (error) {
            console.log({error,message:"Error is in getall  wishlist service"});
            return error.message;
        }
    };

    // update wishlist
    // async updateWishlist(id,body){
    //     try {
    //         return wishlist.findByIdAndUpdate(id,{$set:body},{new:true});
    //     } catch (error) {
    //         console.log({error,message:"Error is in update wishlist service"});
    //         return error.message;
    //     }
    // }

    async deleteWishlist(id){
        try {
            return wishlist.findByIdAndDelete(id);
        } catch (error) {
            console.log({error,message:"Error is in deletewishlist service"});
            return error.message;
        }
    }
}