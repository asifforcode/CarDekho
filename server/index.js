const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
require('dotenv').config();

const db = require('./src/config/DataBase');
const cloudinary = require('./src/config/Cloudinary');
const AllRoutes = require('./src/routes/allRouters');

const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser()); // Parse cookies



// Middleware for file uploads - should come BEFORE express.json()
app.use(
    fileupload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
    })
);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS setup
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true, 
    optionsSuccessStatus: 200
  }));

// Route mounting
app.use('/api/v1', AllRoutes);

// Base route
app.get('/', (req, res) => {
    res.send(`<h1>Node.js Server is Running, Welcome!</h1>`);
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    // Database connection
    db.connect();

    // Cloudinary connection
    cloudinary.cloudinaryConnect();

    console.log(`Server is running on http://localhost:${PORT}`);
});

// Generic error handler
app.use((err, req, res, next) => {
    console.error('Unexpected Error:', err.message);
    res.status(500).json({ success: false, message: 'Something went wrong!', error: err.message });
});


// Global error handler
app.use((err, req, res, next) => {
    console.error('Unexpected Error:', err.message);
    res.status(500).json({ success: false, message: 'Something went wrong!', error: err.message });
  });