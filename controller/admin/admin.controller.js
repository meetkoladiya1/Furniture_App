const adminServices=require('../../services/admin/admin.service');
const adminservice= new adminServices();
const jwt= require('jsonwebtoken');
const  bcrypt= require('bcrypt');

exports.addNewAdmin = async (req,res)=>{
    try {
        let admin = await adminservice.getAdmin({email: req.body.email});
        console.log('admin data:'+admin);
        if(admin && admin!=null){
            return res.json({message:"admin is already register."});
        }
        if(req.file){
            req.body.profile= req.file.path
        }
        let hashpassword = await bcrypt.hash(req.body.password,10);
        admin =await adminservice.addAdmin({...req.body,password:hashpassword});
        res.json({message:"Admin create a new account."});
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in register-C"});
    }
};

exports.adminlogin= async (req,res)=>
{
    try {
        let admin = await adminservice.getAdmin({email: req.body.email});
        if(!admin){
            return res.json("Admin is invalid.")
        };
        let comparepassword= await bcrypt.compare(req.body.password,admin.password);
        if(!comparepassword){
            return res.json({message:"admin password is incorrect."});
        }
        payLoad = {
            adminId : admin._id
        }
        let token = jwt.sign(payLoad,"darshan");
        res.json({token,messgae:"Admin login successfull."});
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in adminlogin-C"});
    }
};

exports.getAdmin= async(req,res)=>
{
    try {
        let admin = await adminservice.getAdminById(req.admin._id)
        // console.log(admin);
        res.json(admin);
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in getadmin-C"});
    }
};

exports.updateAdminProfile=async(req,res)=>
{
    try {
        let admin = await adminservice.getAdminById(req.admin._id);
        if(!admin){
            return res.json({message:"admin is not valid.."});
        }
        admin=await adminservice.updateAdmin(req.admin._id,{...req.body});
        res.json({message:"AdminProfile update successfull.."});
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in update admin profile-C"});
    }
};

exports.deleteAdminProfile= async (req,res)=>
{
    try {
        let admin = await adminservice.getAdminById(req.admin._id);
        if(!admin){
            return res.json({message:"admin is not valid.."});
        };
        admin=await adminservice.updateAdmin(admin._id,{isDelete:true});
        res.json({admin,message:"Admin profile delete success."})
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in delete admin-C"});
    }
};

exports.updateAdminPassword=async(req,res)=>
{
    try {
        let admin=await adminservice.getAdmin(req.admin._id);
        const {oldPassword,newPassword,confirmPassword}=req.body;
        let comparepassword= await bcrypt.compare(oldPassword,admin.password);
        if(!comparepassword){
            return res.json({message:"Password is incorrect."});
        }
        if(oldPassword==newPassword){
            return res.json({message:"old password and new password are same .."});
        }
        if(newPassword!=confirmPassword){
            return res.json({message:"new and confirm password aren't same.."});
        };
        let  hashNewPassword = await bcrypt.hash(newPassword,10);
        admin= await adminservice.updateAdmin(admin._id,{newPassword:hashNewPassword},{new:true});
        res.json({message:"Update password successfully.."})
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error update password.."});
    }
}