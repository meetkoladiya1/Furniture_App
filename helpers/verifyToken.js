const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// exports.userverifyToken = async (req, res, next) => 
// {
//     try {
//         const authorized = req.headers['authorization'];
//         if(typeof authorized !== 'undefined'){
//             let token = authorized.split(" ")[1];
//             // console.log(token);
//             const {userId} = jwt.verify(token, 'meet');
//             // console.log(userId);
//             req.user = await User.findOne({_id : userId, isDelete: false});
//             res.json(token, {message:'user verified'});
//             // console.log(req.user);
//             req.user? next(): res.json({message: 'Invalid user'});
//         }
//     } catch (error) {
//         console.log(error);
//         res.json({message: "Internal Server Error in User VerifyToken"})     
//     }
// }

// exports.adminverifyToken = async (req, res, next) => {
//     try {
//         const authorized = req.headers['authorization'];
//         if(typeof authorized !== 'undefined'){
//             let token = authorized.split(" ")[1];
//             // console.log(token);
//             const {userId} = jwt.verify(token, 'meet');
//             // console.log(userId);
//             req.user = await User.findOne({_id : userId, isDelete: false});
//             res.json(token, {massage: 'admin verified'})
//             req.user? next(): res.json({message: 'Invalid user'});
//         }
//     } catch (error) {
//         console.log(error);
//         res.json({message: "Internal Server Error in User VerifyToken"})     
//     }
// }

exports.userverifyToken = async (req, res, next) => {
    try {
        let authorization = req.headers['authorization'];

        if (!authorization) {
            return res.status(401).json({ message: 'Not Authorizationed' });
        }
        let token = authorization.split(" ")[1];
        let { userId } = await jwt.verify(token, process.env.JWT_SECRATE);

        let user = await User.findOne({ _id: userId, isDelete: false });

        if (!user) {
            return res.status(404).json({ message: 'User not found or deleted' });
        }

        req.user = user;
        next();
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' });
    }
};


exports.adminverifyToken = async (req, res, next) => {
    try {
        let authorization = req.headers['authorization'];

        if (!authorization) {
            return res.status(401).json({ message: 'Not Authorizationed' });
        }
        let token = authorization.split(" ")[1];
        let { userId } = await jwt.verify(token, process.env.JWT_SECRATE);

        let user = await User.findOne({ _id: userId, isDelete: false });

        if (!user) {
            return res.status(404).json({ message: 'User not found or deleted' });
        }

        req.user = user;
        next();
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' });
    }
};


