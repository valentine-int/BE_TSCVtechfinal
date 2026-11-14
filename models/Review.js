import mongoose, { trusted } from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        movieTitle: {
            type: String,
            required: true,
            trim: true
        }
    },
    
)