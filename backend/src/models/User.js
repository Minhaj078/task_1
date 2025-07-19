const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true, // Ensure unique user names
        },
        totalPoints: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;