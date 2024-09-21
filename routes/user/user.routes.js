const express = require('express');
const userRoutes = express.Router();
const {userverifyToken} = require("../../helpers/verifyToken");
const {upload} = require('../../helpers/imageUpload');
const { 
    registerUser,
    loginUser,
    getProfile,
    updateUser,
    deleteUser,
    updatePassword
 } = require('../../controller/user/user.controller');

userRoutes.post('/register', upload.single('profile'), registerUser);
userRoutes.post('/login', upload.none(), loginUser);
userRoutes.get('/get-profile', upload.none(), userverifyToken, getProfile);
userRoutes.put('/update-user', upload.none(), userverifyToken, updateUser);
userRoutes.delete('/delete-user', upload.none(), userverifyToken, deleteUser);
userRoutes.put('/update-password', upload.none(), userverifyToken, updatePassword);

module.exports = userRoutes;