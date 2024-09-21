const express = require ('express');
const productRoutes= express.Router();
const { upload }= require ('../../helpers/imageUpload');
const {addProducts, getAllProducts, getSpecificProduct, updateProduct, deleteProuct} = require('../../controller/admin/product.admin.controller');

productRoutes.post('/add-product', upload.single('profile'), addProducts)
productRoutes.get('/getall-product', upload.none(), getAllProducts);
productRoutes.get('/getspecific-product', upload.none(), getSpecificProduct);
productRoutes.put('/update-product', upload.none(), updateProduct);
productRoutes.delete('/delete-product', upload.none(), deleteProuct);

module.exports=productRoutes;