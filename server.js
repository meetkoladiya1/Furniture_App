require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const port = process.env.PORT
const dbURL = process.env.MONGO_URL

server.use(cors());

server.get('/', (req, res) => {
    res.send("Welcome to Server");
})
server.listen(port, () => {
    mongoose
    .connect(dbURL)
    .then(() => console.log("Database connection established Success..."))
    .catch(err => console.log(err));
    console.log(`Server is Start at http://localhost:${port}`);
});