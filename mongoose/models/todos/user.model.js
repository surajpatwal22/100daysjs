import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    // name: String,
        name:{
            type:string,
            // required:["true","please provide a name "]
            required:true,
            unique:true,
            lowercase:true
        },
        // email:string,
        email:{
            type:string,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:string,
            // required:true,
            // required kai sath array bhi pass kar skte hai ,if not true pass a custom message
            required:["true","password is required"]
        }

},
{timestamps:true}
);

// export default mongoose.model("User",userSchema);

export const User = mongoose.model("User",userSchema);