import express from "express";
import { createLoan, getLoans, getLoanById, updateLoan, deleteLoan } from "../controllers/loanController.js";
import e from "express";

const router = Router();

router.get("/loans", getLoans);
router.get("/loans/:id", getLoanById);
router.post("/loans", createLoan);
router.put("/loans/:id", updateLoan);
router.delete("/loans/:id", deleteLoan);

export default router;



