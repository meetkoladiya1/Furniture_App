const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String
    },
    profile:{
        type:String
    },
    phoneNo:{
        type:string
    },
    isDelete:{
        type: Boolean,
        default: false
    },
    admin:{
        type: Boolean,
        default: false
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("users", userSchema);