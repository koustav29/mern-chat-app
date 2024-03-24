import mongoose from "mongoose";

const connectToMongoDB = async() => {
    try{
        mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongodb!");
    }catch(error){
        console.log("error while connecting to mongodb!",error.message);
    }
}

export default connectToMongoDB;