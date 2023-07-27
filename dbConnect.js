const mongoose = require('mongoose');

module.exports = async() =>{
    const mongoUri = 'mongodb+srv://vagishmaurya:i6d3I4l0iWvh1KLP@cluster0.fajd6jj.mongodb.net/?retryWrites=true&w=majority';
    try{
    const connect =await mongoose.connect(mongoUri , {
        useUnifiedTopology : true,
        
     }); 
  console.log(`MongoDb connected: ${connect.connection.host}`);
} catch(error){
    console.log(error);
    process.exit(1);
}
};