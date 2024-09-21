const cartServices=require('../../services/user/cart.user.service');
const cartservice= new cartServices();

exports.addCart = async (req,res)=>
{
    try {
        let cart = await cartservice.showMyCart({cartItem:req.body.cartItem,user:req.user._id});
        if(cart){
            return res.json({message:"Cart is already added.."});
        }
        if(!cart){
            await cartservice.addCart({...req.body,user:req.user, cartItem:req.cartItem});
            res.json({message:"Cart add successfully."});
        }
    } catch (error) {
        console.log(error);
        res.json({message:"Error in addCart controller"});
    };
};

exports.getAllCarts=async(req,res)=>
{
    try {
        let cart=await cartservice.showAllCart({user:req.user._id});
        if(!cart){
            return res.json({message:"No one cart here..sorry"});
        }
        res.json(cart);
    } catch (error) {
        console.log(error);
        res.json({message:"Error in getallcarts controller"});
    }
};

exports.updateCart=async(req,res)=>
{
    try {
        let cart= await cartservice.showMyCart({cartItem:req.body.cartItem,user:req.user._id});
        if(!cart){
                return res.json({message:"Cart is not added"});
            }
        await cartservice.updateCart(cart._id,{...req.body});
        // console.log(cart);
        res.json({message:"Cart update success."})
    } catch (error) {
        console.log(error);
        res.json({message:"Error in updatecarts controller"});
    }
};

exports.deleteCart=async(req,res)=>
{
    try {
        let cart = await cartservice.showMyCart({cartItem:req.body.cartItem,user:req.user._id,isDelete:false});
        if(!cart){
            return res.json({message:"Cart is not added"});
        }
        await cartservice.updateCart(cart._id,{isDelete:true});
    } catch (error) {
        console.log(error);
        res.json({message:"Error in deletecarts controller"});
    }
}