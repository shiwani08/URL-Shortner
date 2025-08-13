import e from "express";
import mongoose from "mongoose";

async function connectDB() {
    return mongoose.connect("mongodb+srv://shiwanisoni:hhGXcPAW2USHhagW@shortner.sn7gmwf.mongodb.net/?retryWrites=true&w=majority&appName=shortner");
}

export default connectDB;