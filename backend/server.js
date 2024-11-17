const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse incoming requests with JSON payload

// Connect to MongoDB
connectDB();

app.get('/',(req,res) => {res.send('Welcome to the Contact Management API');
});

// Routes
app.use('/api/contacts', require('./routes/contacts'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
