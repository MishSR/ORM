import Author from '../models/author.js';



export const getAuthors = async (req, res) => {
    const Authors = await Author.findAll({
        include: [{ model: Book, 
            as: "books" }]
    });
    res.json(Authors);
};

export const getAuthorById = async (req, res) => {
    const Author = await Author.findByPk(req.params.id, {
        include: [{ model: Book, 
            as: "books" }]
    });
    if (!Author) {
        return res.status(404).json({ message: "Author not found" });
    }
    res.json(Author);
};

export const createAuthor = async (req, res) => {
    const { name, authorId } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name of the Author is required" });
    }
    const Author = await Author.create({ name, authorId });
    res.status(201).json({message: "Author created successfully", Author});
};

export const updateAuthor = async (req, res) => {
    const { name, authorId } = req.body;
    const Author = await Author.findByPk(req.params.id);
    if (!Author) {
        return res.status(404).json({ message: "Author not found" });
    }
    Author.name = name || Author.name;
    Author.authorId = authorId || Author.authorId;      
    await Author.save();
    res.json({ message: "Author updated successfully", Author });
};

export const deleteAuthor = async (req, res) => {
    const Author = await Author.findByPk(req.params.id);
    if (!Author) {
        return res.status(404).json({ message: "Author not found" });
    }
    await Author.destroy();
    res.json({ message: "Author deleted successfully" });
};