const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://akashgaurav456:Aakash@cluster0.gpfigal.mongodb.net/movie?retryWrites=true&w=majority");

module.exports={connect};