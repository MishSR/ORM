import User from "../models/user.js";
import { Book, Review, Loan } from "../models/index.js";

export const getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

export const getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id, {
        include: [
            { model: Review, as: "reviews" },
            { model: Loan, as: "loans", include: [{ model: Book, as: "book" }] }
        ]
    });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
};

export const createUser = async (req, res) => {
    const { name, age, address } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name of the User is required" });
    }
    if (!age) {
        return res.status(400).json({ error: "Age of the User is required" });
    }
    if (!address) {
        return res.status(400).json({ error: "Address of the User is required" });
    }
    const user = await User.create({ name, age, address });
    res.status(201).json({ message: "User created successfully", user });
};

export const updateUser = async (req, res) => {
    const { name, age, address } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    user.name = name || user.name;
    user.age = age || user.age;
    user.address = address || user.address;
    await user.save();
    res.json({ message: "User updated successfully", user });
};

export const deleteUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    res.json({ message: "User deleted successfully" });
};

