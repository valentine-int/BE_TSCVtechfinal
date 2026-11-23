import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        tmdbId: {
            type: Number,
            required: true,
            unique: true
        },

        title: {
            type: String,
            required: true,
            trim: true
        },

        type: {
            type: String,
            enum: ["movie", "tv"],
            required: true
        },

        posterPath: {
            type: String,
            default: null
        },

        releaseYear: {
            type: Number,
            default: null
        },

        genre: {
            type: [String],
            default: []
        },

        rating: {
            type: Number,
            min: 1,
            max: 10,
            default: null
        },

        review: {
            type: String,
            trim: true,
            default: ""
        },

        status: {
            type: String,
            enum: ["watched", "watchlist"],
            default: "watchlist"
        }
    },
    {
        timestamps: true
    }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;