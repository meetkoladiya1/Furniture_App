const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.userverifyToken = async (req, res, next) => {
    try {
        const authorized = req.headers['authorization'];
        if(typeof authorized !== 'undefined'){
            let token = authorized.split(" ")[1];
            // console.log(token);
            const {userId} = jwt.verify(token, 'meet');
            // console.log(userId);
            req.user = await User.findOne({_id : userId, isDelete: false});
            req.user? next(): res.json({message: 'Invalid user'});
        }
    } catch (error) {
        console.log(error);
        res.json({message: "Internal Server Error in User VerifyToken"})     
    }
}

exports.adminverifyToken = async (req, res, next) => {
    try {
        const authorized = req.headers['authorization'];
        if(typeof authorized !== 'undefined'){
            let token = authorized.split(" ")[1];
            // console.log(token);
            const {userId} = jwt.verify(token, 'meet');
            // console.log(userId);
            req.user = await User.findOne({_id : userId, isDelete: false});
            req.user? next(): res.json({message: 'Invalid user'});
        }
    } catch (error) {
        console.log(error);
        res.json({message: "Internal Server Error in User VerifyToken"})     
    }
}