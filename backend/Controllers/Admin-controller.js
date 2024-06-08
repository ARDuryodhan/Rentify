const User = require("../Models/User-model");
const Contact = require("../Models/Contact-Model");
const Property = require("../Models/Property-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//user delete logic

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Available" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    if (!properties || properties.length === 0) {
      return res.status(404).json({ message: "No Contacts Available" });
    }
    return res.status(200).json(properties);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  getAllProperties,
  deleteUserById,
};
