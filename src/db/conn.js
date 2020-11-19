const mongoose = require("mongoose") 


mongoose.connect("mongodb://localhost:27017/olymics", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("Connection succesfully.....")
}).catch((e)=>{
    console.log("No connection")
})



