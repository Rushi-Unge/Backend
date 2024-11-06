// Import dependencies
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";  // Assuming your MongoDB connection logic is in ./db/index.js

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Initialize express app
const app = express();

// Middleware (optional, add if necessary)
app.use(express.json());  // Parse JSON bodies

// Connect to MongoDB and start the server
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!!", err);
    });

// Example route (optional, remove if not needed)
app.get('/', (req, res) => {
    res.send('Finally done...');
});
