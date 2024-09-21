const express = require('express');
const productRoutes = express.Router();

const { upload } = require('../../helpers/imageUpload');
const { getAllProducts, getSpecificProduct } = require('../../controller/user/product.controller');

productRoutes.get('/getall-product', upload.none(), getAllProducts);
productRoutes.get('/getspecific-product', upload.none(), getSpecificProduct);

module.exports = productRoutes;