import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content:{
    }
},{timestamps:true});


export const Todo = mongoose.model("Todo",todoSchema);
