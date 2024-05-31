import mongoose from "mongoose";

const userTableSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    mobile:{
        type: Number,
        required: true,
        unique: true
    },
    dob : {
        type: Date,
        required: true
    },
    status : {
        type: String,
        default: "Active"
    },
    password : {
        type: String,
        required: true
    },
    isAdmin: {
        type: String,
        default: "Inactive",
    },


},{
    timestamps: true,
});

const UserTable = mongoose.model('userTable', userTableSchema)

export  {UserTable}