const app = require("./app")

const mongoose = require("mongoose")

function dbConnect(){
    mongoose.connect("mongodb+srv://piyukothawade789_db_user:se1pRZb9gXZjdt3m@cluster0.low7plf.mongodb.net/").then(() =>{
    console.log("Connected to db")
})

}

dbConnect()



app.listen(3000, ()=>{
    console.log("App starterd at port 3000")
})