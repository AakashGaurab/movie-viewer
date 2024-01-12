const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port || 3501;
const cors = require("cors");

app.use(cors({origin:"*"}));
app.use(express.json());

const {connect} = require("./config/db");
const {user} = require("./routes/userRoutes");
const {movie} = require("./routes/movieRoutes");
const {auth} = require("./middleware/auth");

app.use("/user",user)
app.use("/movie",auth,movie);






app.listen(port,async()=>{
    try {
        await connect;
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
    }

    console.log(`http://localhost:${port}`)
})