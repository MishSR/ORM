import Loan from "../models/loan.js";
import { User, Book } from "../models/index.js";

export const getLoans = async (req, res) => {
    const loans = await Loan.findAll();
    res.json(loans);
};

export const getLoanById = async (req, res) => {
    const loan = await Loan.findByPk(req.params.id, {
        include: [
            { model: User, as: "user" },
            { model: Book, as: "book" }
        ]
    });
    if (!loan) {
        return res.status(404).json({ message: "Loan not found" });
    }
    res.json(loan);
};

export const createLoan = async (req, res) => {
    const { userId, bookId, startDate, endDate } = req.body;
    if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
    }
    if (!bookId) {
        return res.status(400).json({ error: "Book ID is required" });
    }
    if (!startDate) {
        return res.status(400).json({ error: "Start date is required" });
    }
    if (!endDate) {
        return res.status(400).json({ error: "End date is required" });
    }
    const loan = await Loan.create({ userId, bookId, startDate, endDate });
    res.status(201).json({ message: "Loan created successfully", loan });
};

export const updateLoan = async (req, res) => {
    const { userId, bookId, startDate, endDate } = req.body;
    const loan = await Loan.findByPk(req.params.id);
    if (!loan) {
        return res.status(404).json({ message: "Loan not found" });
    }
    loan.userId = userId || loan.userId;
    loan.bookId = bookId || loan.bookId;
    loan.startDate = startDate || loan.startDate;
    loan.endDate = endDate || loan.endDate;
    await loan.save();
    res.json({ message: "Loan updated successfully", loan });
};

export const deleteLoan = async (req, res) => {
    const loan = await Loan.findByPk(req.params.id);
    if (!loan) {
        return res.status(404).json({ message: "Loan not found" });
    }
    await loan.destroy();
    res.json({ message: "Loan deleted successfully" });
};
