const mongoose = require("mongoose")


function connectToDb(){
    mongoose.connect("mongodb+srv://piyukothawade789_db_user:se1pRZb9gXZjdt3m@cluster0.low7plf.mongodb.net/day-5")
    .then(() => {
        console.log("Connected to db")
    })
}

module.exports = connectToDb