const app = require("./app")

const mongoose = require("mongoose")
const connectToDb = require("./config/database")



connectToDb()

app.listen(3000, ()=>{
    console.log("app is running on port 3000")
})