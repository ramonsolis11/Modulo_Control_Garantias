const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = 'mongodb+srv://mondev:Abretumente@2@cluster0.q8ovn9p.mongodb.net/?retryWrites=true&w=majority';
        await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
};

module.exports = connectDB;
