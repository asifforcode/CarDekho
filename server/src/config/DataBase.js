const mongoose = require('mongoose')

require('dotenv').config();

exports.connect = () =>{
    mongoose.connect(process.env.DB_URL,{
        // useNewUrlPraser:true,
        // useUnifiedTopology:true
    }).then(()=>{console.log("DB Connection established!!")})
    .catch((error)=>{
        console.log("DB connection faceing Issue");
        console.error(error.message);
        process.exit(1);
    })
}