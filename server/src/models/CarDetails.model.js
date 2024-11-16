const mongoose=require('mongoose');

const CarDetailsSchema=new mongoose.Schema({
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
    },
    name:{type:String},
    brands:{type:String },
    price:{type:String },
    fuelType:{type:String },
    mileage:{type:String },
    SafetyRating:{type:String },
    Warranty:{type:String},
    Seater:{type:String},
    Size:{type:String},
    FuelTankSize:{type:String},
    Transmission:{type:String},
    description:{type:String},
    imageUrl:{type:String}
});

const CarDetails=mongoose.model('CarDetails',CarDetailsSchema);
module.exports = CarDetails;