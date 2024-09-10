const express = require('express');
const userRoutes = express.Router();
const {userverifyToken} = require("../../helpers/verifyToken");
const {upload} = require('../../helpers/imageUpload');
const { registerUser } = require('../../controller/user/user.controller');

userRoutes.post('/register', upload.single('profile'), registerUser);

module.exports = userRoutes;