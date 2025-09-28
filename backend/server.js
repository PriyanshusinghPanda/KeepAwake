// pakages/backend/server.js
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require('dotenv');
// const route = require('./routesç');
const sign = require('./auth/Login')

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Environment variables
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware to log requests in development mode
if (NODE_ENV === 'development') {
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    });
}

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Use routes defined in routes.js
// app.use('/api', route);

app.use("/signup", sign);
// Sample route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
