const user = require('../../models/user.model');

module.exports = class userServices{
    // register
    async addNewUser(body)
    {
        try {
            return await user.create(body);
        } catch (error) {
            console.log({error, message:"Error is in register Service"});
            return error.message;
        }
    };

    // login
    async getUser(body)
    {
        try {
            return await user.findOne(body);
        } catch (error) {
            console.log({error, message:"Error is in login Service"});
            return error.message;
        }
    };

    // get all user
    async getUserById(body)
    {
        try {
            return await user.findOne(body);
        } catch (error) {
            console.log({error, message:"Error is in get all user Service"});
            return error.message;
        }
    };

    // update user
    async updateUser(body)
    {
        try {
            return await user.findByIdAndUpdate(id, {$set: body}, {new: true});
        } catch (error) {
            console.log({error, message:"Error is in update user Service"});
            return error.message;
        }
    };
}