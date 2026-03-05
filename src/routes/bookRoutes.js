import { Router } from "express";   
import { createBook, getBooks, getBookById, updateBook, deleteBook } from "../controllers/bookController.js";

const router = Router();

router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.post("/books", createBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;

