const userServices = require('../../services/user/user.service');
const userService = new userServices();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    try {
        let user = await userService.getUser({email: req.body.email});
        if(user){
            return res.json({message: "User is already register"});
        }
        if(req.file){
            req.body.profile = req.file.path.replace("\\",'/');
        }
        let hashpassword = await bcrypt.hash(req.body.password, 10);
        user = await userService.addNewUser({...req.body.password.hashpassword});
        res.json({message: "User create a new Account"});
    } catch (error) {
        console.log(error);
        res.json({message: 'Internal Server error in register in C'})
    }
};