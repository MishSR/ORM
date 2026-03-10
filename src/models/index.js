import sequelize from "../config/db.js";
import Author from "./author";
import Book from "./book";
import User from "./user.js";
import Loan from "./loan.js";
import Review from "./review.js";

Author.hasMany(Book, { 
    foreignKey: authorId,
    as: "books",});

Book.belongsTo(Author, {
    foreignKey: authorId,
    as: "author",});

User.hasMany(Review, {
    foreignKey: userId,
    as: "reviews",
});

Review.belongsTo(User, {
    foreignKey: userId,
    as: "user",
});

User.hasMany(Loan, {
    foreignKey: userId,
    as: "loans",
});

User.hasMany(Review, {
    foreignKey: bookId,
    as: "reviews",
});

Book.hasMany(Loan, {
    foreignKey: bookId,
    as: "loans",
});

Loan.belongsTo(Book, {
    foreignKey: bookId,
    as: "book",
});

export { sequelize, Author, Book, User, Loan, Review };


