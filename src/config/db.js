import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URI)               // await is used so that the mongodb server is connected and later the message is printed
       console.log("MongoDB Connected"); 

    }catch(error){
        console.log("MongoDB Connection Failed: ", error.message);
        process.exit(1);
    }
}

