const express=require('express')
const router=express.Router();
const {middlware, middleware} = require('../middleware/middleware')


const {addCar ,getallCars,getByCarId}=require('../controllers/carController');
// router.post('/abc',abc);

router.put('/addcar',middleware,addCar);
router.get('/getcars',getallCars);
router.get('/getcarbyid/:carId',getByCarId);


module.exports= router;