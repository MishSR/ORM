import Review from "../models/review";

export const getReviews = async (req, res) => {
    const Reviews = await Review.findAll();
    res.json(Reviews);
};

export const getReviewById = async (req, res) => {
    const Review = await Review.findByPk(req.params.id);
    if (!Review) {
        return res.status(404).json({ message: "Review not found" });
    }
    res.json(Review);
};

export const createReview = async (req, res) => {
    const { userId, bookId, comment } = req.body;
    if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
    }
    if (!bookId) {
        return res.status(400).json({ error: "Book ID is required" });
    }
    if (!comment) {
        return res.status(400).json({ error: "Comment is required" });
    }
    const Review = await Review.create({ userId, bookId, comment });
    res.status(201).json({message: "Review created successfully", Review});
};

export const updateReview = async (req, res) => {
    const { userId, bookId, comment } = req.body;
    const Review = await Review.findByPk(req.params.id);
    if (!Review) {
        return res.status(404).json({ message: "Review not found" });
    }
    Review.userId = userId || Review.userId;
    Review.bookId = bookId || Review.bookId;
    Review.comment = comment || Review.comment;
    await Review.save();
    res.json({ message: "Review updated successfully", Review });
};

export const deleteReview = async (req, res) => {
    const Review = await Review.findByPk(req.params.id);
    if (!Review) {
        return res.status(404).json({ message: "Review not found" });
    }
    await Review.destroy();
    res.json({ message: "Review deleted successfully" });
};

