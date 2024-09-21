const admin = require('../../models/user.model');

module.exports=class adminServices{
    // add admin
    async addAdmin(body){
        try {
            return await admin.create(body);
        } catch (error) {
            console.log({error,message:"Error is in admin register-service"});
            return error.message;
        }
    };

    // login admin
    async getAdmin(body){
        try {
            return await admin.findOne(body);
        } catch (error) {
            console.log({error,message:"Error is in admin login -service"});
            return error.message;
        }
    };

    // get admin
    async getAdminById(id){
        try {
            return await admin.findById(id)
        } catch (error) {
            console.log({error,message:"Error is in admin getprofile-service"});
            return error.message;
        }
    }

    //update admin profile
    async updateAdmin(id,body){
        try {
            return await admin.findByIdAndUpdate(id,{$set : body},{new:true});
        } catch (error) {
            console.log({error,message:"Error is in admin update-service"});
            return error.message;
        }
    }
}
