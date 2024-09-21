const productServices = require("../../services/admin/product.admin.service");
const productService= new productServices();

exports.addProducts = async(req,res)=>
{
    try {
        let product = await productService.getProduct({title:req.body.title});
        if(product){
            return res.json({message:"Product is already exist..."});
        }
        if(req.file){
            req.body.profile=req.file.path.replace('\\','/');
        }
        product= await productService.addNewProduct({...req.body});
        res.json({product,message:"Product is added."});
    } catch (error) {
        console.log({error,message:"Error is product add"});
            return error.message;
    }
};

exports.getAllProducts= async (req,res)=>
{
    try {
        let product = await productService.getAllProduct({isDelete:false});
        if(!product){
            return res.json({message:"Product is invalid"})
        }
        res.json(product);
    } catch (error) {
        console.log({error,message:"Error is get all products"});
        return error.message;
    }
};

exports.getSpecificProduct= async(req,res)=>
{
    try {
        let product=await productService.getProductById(req.query.productId);
        // console.log(product);
        if(!product){
            return res.json("product is not exist..");
        }
        let showProduct={
            id : product._id,
            title: product.title,
            price: product.price
        };
        res.json(showProduct);
    } catch (error) {
        console.log({error,message:"Error is get specific product"});
        return error.message;
    }
};

exports.updateProduct= async (req,res)=>
{
    try {
        let product = await productService.getProductById(req.body.productId);
        if(!product){
            return res.json({message: "Product is not exist.."});
        }
        product= await productService.updateProduct(product._id,{...req.body},{new:true});
        res.json({message:"Product update successfully...."});
    } catch (error) {
        console.log({error,message:"Error is update product"});
        return error.message;   
    }
};

exports.deleteProuct= async (req,res)=>
{
    try {
        let product =await productService.getProductById(req.body.productId);
        if(!product){
            return res.json({message: "Product is not exist.."});
        };
        product= await productService.updateProduct(product._id,{isDelete:true});
        return res.json(product);
    } catch (error) {
        console.log({error,message:"Error is delete product"});
        return error.message; 
    }
}
