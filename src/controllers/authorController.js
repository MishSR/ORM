import Author from '../models/author.js';
import { Book } from '../models/index.js';

export const getAuthors = async (req, res) => {
    const authors = await Author.findAll({
        include: [{ model: Book, as: "books" }]
    });
    res.json(authors);
};

export const getAuthorById = async (req, res) => {
    const author = await Author.findByPk(req.params.id, {
        include: [{ model: Book, as: "books" }]
    });
    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }
    res.json(author);
};

export const createAuthor = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name of the Author is required" });
    }
    const author = await Author.create({ name });
    res.status(201).json({ message: "Author created successfully", author });
};

export const updateAuthor = async (req, res) => {
    const { name } = req.body;
    const author = await Author.findByPk(req.params.id);
    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }
    author.name = name || author.name;
    await author.save();
    res.json({ message: "Author updated successfully", author });
};

export const deleteAuthor = async (req, res) => {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }
    await author.destroy();
    res.json({ message: "Author deleted successfully" });
};
