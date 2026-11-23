import Review from "../models/Review.js";

// GET semua review
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();

        res.status(200).json({
            succes: true,
            total: reviews.length,
            data: reviews 
        });
        
    } catch (error) {
        res.status(500).json({
            succes: false,
            message: "Gagal mengambil data review",
            error: error.message
        });
    }
};