const CarDetails = require('../models/CarDetails.model');
const { imageUpload } = require('../utils/imageUploader');

exports.addCar = async (req, res) => {
    try {
        let user=req.user;

        // Validate carData
        if (!req.body.carData) {
            return res.status(400).json({ success: false, message: 'carData is missing' });
        }

        // Parse carData from string to object
        const carData = JSON.parse(req.body.carData);
        const { name, brands, price, fuelType, mileage, description } = carData;

        // Validate required fields
        if (!name || !brands || !price || !fuelType || !mileage || !description) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Handle image upload
        let uploadedImageUrl = null;
        if (req.files && req.files.imageFile) {
            uploadedImageUrl = await imageUpload(req, null); // Upload image and get URL
        }

        console.log("uploaded Images: "+uploadedImageUrl);
        // Create a new CarDetails instance
        const newCar = new CarDetails({
            ...carData,
            userid:user._id,
            imageUrl: uploadedImageUrl, // Store the Cloudinary URL in the images field
        });

        // Save the new car details to the database
        const savedCar = await newCar.save();
        return res.status(201).json({ success: true, message: 'Car added successfully', car: savedCar });
    } catch (error) {
        console.error('Error in addCar Controller:', error.message);
        return res.status(500).json({ success: false, message: 'Failed to add car', error: error.message });
    }
};

exports.getallCars = async (req, res) => {
    try {
        // Fetch all cars from the database
        const cars = await CarDetails.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch cars', error: error.message });
    }
};


// Fetch car by carId
// Fetch car by carId
exports.getByCarId = async (req, res) => {
    try {
      const carId = req.params.carId; // carId from URL params (use req.params to access route params)
      console.log('Received carId:', carId); // Debugging output

  
      const car = await CarDetails.findById(carId); // Search for the car by its ID
      
      if (!car) {
        return res.status(404).json({
          message: 'Car not found',
          success: false
        }); // If car not found, return 404
      }
  
      res.status(200).json(car); // Send the car data if found
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch car details', error: error.message }); // Handle errors
    }
  };
  





// Fetch cars by userId (assumes user ID is part of the authenticated user)
exports.getByUserIdCars = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming you are using JWT or some other method to authenticate and get user data

        // Find all cars belonging to the user (assuming there's a userId field in the car model)
        const cars = await CarDetails.find({ userId });

        if (cars.length === 0) {
            return res.status(404).json({ message: 'No cars found for this user' }); // If no cars are found
        }

        res.status(200).json(cars); // Send the cars related to the user
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch cars for the user', error: error.message }); // Handle errors
    }
};
