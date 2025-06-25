//This was created as a practice
import mongoose from "mongoose";

const usereSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
    type: String,
    required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})
export const user = mongoose.model('user',usereSchema);