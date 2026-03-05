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
    const { name, authorId } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name of the Review is required" });
    const Review = await Review.create({ name, authorId });
    res.status(201).json({message: "Review created successfully", Review});
    }
};

export const updateReview = async (req, res) => {
    const { name, authorId } = req.body;
    const Review = await Review.findByPk(req.params.id);
    if (!Review) {
        return res.status(404).json({ message: "Review not found" });
    Review.name = name || Review.name;
    Review.authorId = authorId || Review.authorId;      
    await Review.save();
    res.json({ message: "Review updated successfully", Review });
    }
};

export const deleteReview = async (req, res) => {
    const Review = await Review.findByPk(req.params.id);
    if (!Review) {
        return res.status(404).json({ message: "Review not found" });
    }
    await Review.destroy();
    res.json({ message: "Review deleted successfully" });
};

