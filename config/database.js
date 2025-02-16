require("dotenv").config(); // ✅ Load .env file at the beginning
const mongoose = require("mongoose");

// Debugging: Check if DATABASE_URL is loading correctly
console.log("🔍 DATABASE_URL:", process.env.DATABASE_URL || "Not Found");

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL || DATABASE_URL.trim() === "") {
    console.error("❌ DATABASE_URL is missing or empty in the .env file!");
    process.exit(1); // Stop the app if no DB URL
}

const dbConnect = async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ ISSUE IN DB CONNECTION:", error.message);
        process.exit(1);
    }
};

module.exports = dbConnect;
