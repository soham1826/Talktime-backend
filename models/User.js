import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            reuired:true,
            min:2,
            max:50,
        },
        lastName:{
            type:String,
            reuired:true,
            min:2,
            max:50,
        },
        email:{
            type:String,
            reuired:true,
            max:50,
            unique:true
        },
        password:{
            type:String,
            reuired:true,
            min:5
        },
        picturePath:{
            type:String,
            default:""
        },
        friends:{
            type:Array,
            default:[],

        },
        location:String,
        occupation:String,
        viewedProfile:Number,
        impressions:Number

    },{timestamps:true}
);

const User = mongoose.model('User',UserSchema)

export default User;