const express = require('express');
const wishlistRoutes= express.Router();
const { userverifyToken } = require("../../helpers/verifyToken");
const { 
    addWishlist,
    deleteWishlist
 }= require('../../controller/wishlist/wishlist.controller');

wishlistRoutes.post('/add-wishlist', userverifyToken, addWishlist);
wishlistRoutes.delete('/delete-wishlist', userverifyToken, deleteWishlist);

module.exports = wishlistRoutes;