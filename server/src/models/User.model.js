const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => /\S+@\S+\.\S+/.test(email), 
            message: 'Invalid email format',
        },
    },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    otp: { type: String },
    otpExpires: { type: Date },
    likesCar: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarDetails', 
    }],
}, { timestamps: true });



// Pre-save hook to hash passwords
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});


userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};




const User = mongoose.model('User', userSchema);
module.exports = User;
