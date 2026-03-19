import sequelize from "../config/db.js";
import Author from "./author.js";
import Book from "./book.js";
import User from "./user.js";
import Loan from "./loan.js";
import Review from "./review.js";

Author.hasMany(Book, { 
    foreignKey: "authorId",
    as: "books",});

Book.belongsTo(Author, {
    foreignKey: "authorId",
    as: "author",});

User.hasMany(Review, {
    foreignKey: "userId",
    as: "reviews",
});

Review.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
});

User.hasMany(Loan, {
    foreignKey: "userId",
    as: "loans",
});

Loan.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
});

Book.hasMany(Loan, {
    foreignKey: "bookId",
    as: "loans",
});

Loan.belongsTo(Book, {
    foreignKey: "bookId",
    as: "book",
});

Book.hasMany(Review, {
    foreignKey: "bookId",
    as: "reviews",
});

Review.belongsTo(Book, {
    foreignKey: "bookId",
    as: "book",
});

export { sequelize, Author, Book, User, Loan, Review };


