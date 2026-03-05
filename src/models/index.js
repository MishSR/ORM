import sequelize from "../config/db.js";
import Author from "./author";
import Book from "./book";

Author.hasMany(Book, { 
    foreignKey: Id,
    as: "FK_AuthorId",});

Book.belongsTo(Author, {
    foreignKey: authorId,
    as: "FK_AuthorBook",});


