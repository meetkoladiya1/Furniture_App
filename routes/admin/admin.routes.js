const express= require('express');
const adminRoutes=express.Router();
const { adminverifyToken } = require("../../helpers/verifyToken");
const {upload}=require('../../helpers/imageUpload');
const {
    addNewAdmin, 
    adminlogin, 
    getAdmin, 
    updateAdminProfile, 
    deleteAdminProfile, 
    updateAdminPassword
}=require('../../controller/admin/admin.controller');
  
adminRoutes.post('/register',upload.single("profile"),addNewAdmin);
adminRoutes.post('/login',upload.none(),adminlogin);
adminRoutes.get('/get-admin',upload.none(),adminverifyToken,getAdmin);
adminRoutes.put('/update-profile',upload.none(),adminverifyToken,updateAdminProfile);
adminRoutes.put('/update-password',upload.none(),adminverifyToken,updateAdminPassword);
adminRoutes.delete('/delete-profile',upload.none(),adminverifyToken,deleteAdminProfile);


module.exports=adminRoutes;