const cloudinary = require('cloudinary')

require('dotenv').config();
exports.cloudinaryConnect=()=>{
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.CLOUD_API_KEY,
            api_secret:process.env.CLOUD_API_SECRET
        })
        console.log("cloudinary connect established! ");

    }catch(error){
        console.log("Error: to connect cloudinary!!");
        console.log(error.message);
    }
}