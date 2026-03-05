import { Router } from "express";
import { createAuthor, getAuthors, getAuthorById, updateAuthor, deleteAuthor } from "../controllers/authorController.js";
const router = Router();

router.get("/authors", getAuthors);
router.get("/authors/:id", getAuthorById);
router.post("/authors", createAuthor);
router.put("/authors/:id", updateAuthor);
router.delete("/authors/:id", deleteAuthor);

export default router;

