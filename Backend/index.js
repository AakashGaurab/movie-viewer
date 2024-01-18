const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port || 3501;
const key = process.env.key;
const num = process.env.num;
const cors = require("cors");
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Max requests per IP
});

app.use(cors({origin:"*"}));
app.use(express.json());

const {connect} = require("./config/db");
const {user} = require("./routes/userRoutes");
const {movie} = require("./routes/movieRoutes");
const {auth} = require("./middleware/auth");

app.use("/user",limiter,user)
app.use("/movie",limiter,auth,movie);






app.listen(port,async()=>{
    try {
        await connect;
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
    }
    
    if (port || key || num){
        server.close(() => {
            console.log('Server stopped enviroment variable not found');
        });
    }
    else {
        console.log(`http://localhost:${port}`)
    }
    
})