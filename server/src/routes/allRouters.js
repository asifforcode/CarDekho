const express=require('express');
const router=express.Router();


const carRoutes=require("./carRoutes");
router.use('/car',carRoutes);

const userRoutes=require("./userRoutes");
router.use('/user',userRoutes);


module.exports = router;