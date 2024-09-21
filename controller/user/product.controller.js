const productServices = require('../../services/user/product.user.service');
const productService = new productServices();


exports.getAllProducts = async(req,res)=>
    {
        try {
            let product= await productService.getAllProduct(req.query);
            if(!product){
                return res.json({message:"Product is not exist..."});
            }
            let showproducts={
                id : product._id,
                title: product.title,
                price : product.price,
                profile: product.profile
            }
            // res.json({product});
            res.json(product)
        } catch (error) {
            console.log(error);
            res.json({message:"internal server error in get all products controller..."});   
        }
    };
    
    exports.getSpecificProduct= async(req,res)=>
    {
        try {
            let product = await productService.getspecificProduct(req.body.productId);
            if(!product){
                return res.json({message:"product is not exist..."});
            }
            
        } catch (error) {
            console.log(error);
            res.json({message:"internal server error in get-specific products controller..."});   
        }
    }