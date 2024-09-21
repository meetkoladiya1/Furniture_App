require('dotenv').config();
const http =require("http");
const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');
const imagePath = path.join(__dirname, 'piblic', 'images');
const port = process.env.PORT

const { default: mongoose } = require('mongoose');

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors());
server.use('/public/images',express.static(imagePath));

server.get('/', (req, res) => 
{
    res.json("Welcome to Server");
})


const userRoutes = require('./routes/user/user.routes');
const adminRoutes = require('./routes/admin/admin.routes');
const productRoutes = require('./routes/admin/product.admin.routes')
const productuserRoutes = require('./routes/user/product.routes');
const cartRoutes = require('./routes/user/cart.routes');
const wishlistRoutes = require('./routes/wishlist/wishlist.routes');

server.use('/api/user', userRoutes);
server.use('/api/admin', adminRoutes);
server.use('/api/product/admin', productRoutes);
server.use('/api/product/user', productuserRoutes);
server.use('/api/cart', cartRoutes);
server.use('/api/wishlist', wishlistRoutes)

server.listen(port, () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connection established Success..."))
    .catch(err => console.log(err));
    console.log(`Server is Start at http://localhost:${port}`);
});