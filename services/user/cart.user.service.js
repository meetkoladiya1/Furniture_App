const cart = require('../../models/cart.model');

module.exports = class cartServices{
    async addCart(body){
        try {
            return cart.create(body);
        } catch (error) {
            console.log({error,message:"Error addcart services"});
            return error.message;    
        }
    };
    
    async showAllCart(query,user){
        try {
            let body={isDelete:false};
            if(query.me==='true'){
                body.user=user._id
            }
            return cart.find(body).populate('cartItem').populate({
                path:"user",
                model:"users",
                select:"name email profile phone"
            });
        } catch (error) {
            console.log({error,message:"Error showall services"});
            return error.message;
        }
    };

    async showMyCart(body){
        try {
            return cart.findOne(body);
        } catch (error) {
            console.log({error,message:"Error showmy services"});
            return error.message; 
        }
    };

    async updateCart(id,body){
         try {
            return cart.findByIdAndUpdate(id,{$set : body},{new:true});
        } catch (error) {
            console.log({error,message:"Error update cart services"});
            return error.message; 
        }
    };

    async updateManyCart(user,body){
        try {
            return cart.updateMany({user : user},{$set : body},{new:true});
        } catch (error) {
            console.log({error,message:"Error updateMany cart services"});
            return error.message; 
        }
    }
}