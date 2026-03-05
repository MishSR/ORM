import Loan from "../models/loan";  


export const getLoans = async (req, res) => {
    const Loans = await Loan.findAll();
    res.json(Loans);
};

export const getLoanById = async (req, res) => {
    const Loan = await Loan.findByPk(req.params.id);
    if (!Loan) {
        return res.status(404).json({ message: "Loan not found" });
    }
    res.json(Loan);
};

export const createLoan = async (req, res) => {
    const { name, authorId } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name of the Loan is required" });
    const Loan = await Loan.create({ name, authorId });
    res.status(201).json({message: "Loan created successfully", Loan});
    }
};

export const updateLoan = async (req, res) => {
    const { name, authorId } = req.body;
    const Loan = await Loan.findByPk(req.params.id);
    if (!Loan) {
        return res.status(404).json({ message: "Loan not found" });
    Loan.name = name || Loan.name;
    Loan.authorId = authorId || Loan.authorId;      
    await Loan.save();
    res.json({ message: "Loan updated successfully", Loan });
    }
};

export const deleteLoan = async (req, res) => {
    const Loan = await Loan.findByPk(req.params.id);
    if (!Loan) {
        return res.status(404).json({ message: "Loan not found" });
    }
    await Loan.destroy();
    res.json({ message: "Loan deleted successfully" });
};

