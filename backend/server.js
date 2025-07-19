require('dotenv').config(); // Load environment variables
const app = require('./src/app');
const connectDB = require('./src/config/db');
const User = require('./src/models/User'); // Import User model to ensure it's loaded

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Function to initialize 10 users if they don't exist
const initializeUsers = async () => {
    const defaultUsers = [
        "Rahul", "Kamal", "Sanak", "Priya", "Amit",
        "Disha", "Rohit", "Sneha", "Aryan", "Jaya"
    ];

    for (const userName of defaultUsers) {
        const userExists = await User.findOne({ name: userName });
        if (!userExists) {
            await User.create({ name: userName, totalPoints: 0 });
            console.log(`Initialized user: ${userName}`);
        }
    }
};

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    // Initialize users on server start
    await initializeUsers();
});