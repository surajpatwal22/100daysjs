 import mongoose from "mongoose"

 const subTodoSchema = new mongoose.Schema({
    content:{
        type:string,
        require:true
    },
    complete:{
        type:boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
 },{timestamps:true})

 export const subTodo = mongoose.model("SubTodo", subTodoSchema)