import Loan from "../models/loan";  


export const getLoans = async (req, res) => {
    const Loans = await Loan.findAll();
    res.json(Loans);
};

export const getLoanById = async (req, res) => {
    const Loan = await Loan.findByPk(req.params.id,{
        include: [{ model: User,
        as: "user" },
        { model: Book,
        as: "book" }]
    }
    );
    if (!Loan) {
        return res.status(404).json({ message: "Loan not found" });
    }
    res.json(Loan);
};

export const createLoan = async (req, res) => {
    const { userId, bookId, startDate, endDate  } = req.body;
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
    


    const Loan = await Loan.create({ userId, bookId, startDate, endDate });
    res.status(201).json({message: "Loan created successfully", Loan});
    }
};

export const updateLoan = async (req, res) => {
    const { userId, bookId, startDate, endDate  } = req.body;
    const Loan = await Loan.findByPk(req.params.id);
    if (!Loan) {
        return res.status(404).json({ message: "Loan not found" });
    
    Loan.userId = userId || Loan.userId;
    Loan.bookId = bookId || Loan.bookId;
    Loan.startDate = startDate || Loan.startDate;       
    Loan.endDate = endDate || Loan.endDate;

      
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
