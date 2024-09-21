const express = require('express');
const cartRoutes= express.Router();
const{upload}=require('../../helpers/imageUpload');
const {userverifyToken}=require('../../helpers/verifyToken');
const { addCart, getAllCarts, updateCart}=require('../../controller/user/cart.controller');

cartRoutes.post('/add-cart',upload.none(),userverifyToken,addCart);
cartRoutes.get('/getall-cart',upload.none(),userverifyToken,getAllCarts);
cartRoutes.put('/update-cart',upload.none(),userverifyToken,updateCart);

module.exports= cartRoutes;