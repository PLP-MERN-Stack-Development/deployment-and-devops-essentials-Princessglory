const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

console.log('Testing MongoDB Atlas connection...');
console.log('MongoDB URI:', process.env.MONGODB_URI);

// Connect to MongoDB with timeout
mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000, // 10 second timeout
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  })
  .then(() => {
    console.log('✅ Successfully connected to MongoDB Atlas!');
    console.log('Database:', mongoose.connection.name);
    console.log('Host:', mongoose.connection.host);
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB Atlas:', err.message);
    console.error('Error details:', err);
    process.exit(1);
  });

// Set a timeout to prevent hanging
setTimeout(() => {
  console.error('⏰ Connection test timed out after 15 seconds');
  process.exit(1);
}, 15000);