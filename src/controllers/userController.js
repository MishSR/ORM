import User from "../models/user";


export const getUsers = async (req, res) => {
    const Users = await User.findAll();
    res.json(Users);
};

export const getUserById = async (req, res) => {
    const User = await User.findByPk(req.params.id);
    if (!User) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(User);
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
    const User = await User.create({ name, age, address });
    res.status(201).json({message: "User created successfully", User});
};

export const updateUser = async (req, res) => {
    const { name, age, address } = req.body;
    const User = await User.findByPk(req.params.id);
    if (!User) {
        return res.status(404).json({ message: "User not found" });
    User.name = name || User.name;
    User.age = age || User.age;
    User.address = address || User.address;      
    await User.save();
    res.json({ message: "User updated successfully", User });   
    }
};

export const deleteUser = async (req, res) => {
    const User = await User.findByPk(req.params.id);
    if (!User) {
        return res.status(404).json({ message: "User not found" });
    }
    await User.destroy();
    res.json({ message: "User deleted successfully" });
};

