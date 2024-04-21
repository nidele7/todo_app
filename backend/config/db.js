const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb:')
      mongoose.set('strictQuery', false);
      mongoose.connect(process.env.MONGO_URI, () => 
         console.log("Mongo connecté")
      );
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

module.exports = connectDB;


/*const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
};

module.exports = connectDB;*/