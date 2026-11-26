import Review from "../models/Review.js";

// GET semua review
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();

        res.status(200).json({
            success: true,
            total: reviews.length,
            data: reviews 
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal mengambil data review",
            error: error.message
        });
    }
};

// GET satu review By ID
export const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({
                success: false,
                message: "Review tidak ditemukan"
            });
        }

        res. status(200).json({
            success: true,
            data: review
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal mengambil review",
            error: error.message
        });
    }
};

// POST CREATE review baru
export const createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);

        res.status(201).json({
            success: true,
            message: "Review berhasil ditambahkan",
            data: newReview
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Gagal menambahkan review",
        error: error.message
        });
    }
};

// PUT UPDATE review
export const updateReview = async (req, res) => {
    try {
        const updateReview = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updateReview) {
            return  res.status(404).json({
                success: false,
                message: "Review tidak ditemukan"
            });
        }

        res.status(200).json({
            success: true,
            message: "Review berhasil diperbarui",
            data: updateReview
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal memperbarui review",
            error: error.message
        });
    }
};

// Delete R
export const deleteReview = async (req, res) => {
    try {
        const deletedReview = Review.findByIdAndDelete(req.params.id);

        if (!deletedReview) {
            return res.status(404).json({
                success: false,
                message: "Review tidak ditemukan"
            });
        }

        res.status(200).json({
            success: true,
            message: "Review berhasil dihapus"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal menghapus review",
            error: error.message
        });
        
    }
};