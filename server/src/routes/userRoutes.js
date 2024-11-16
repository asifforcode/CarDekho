const express=require('express')
const router=express.Router();
// const {middleware}=require('../middleware/middleware')


const {signup,login }=require('../controllers/authController');
// router.post('/abc',abc);

router.post('/signup',signup);
router.post('/login',login);

module.exports= router;