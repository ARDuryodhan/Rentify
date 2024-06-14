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

//Update User Details logic

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;

    const updatedUser = await User.updateOne({ _id: id }, {
      $set: updateUserData,
    });

    return res.status(200).json(updatedUser)
  } catch (error) {
    console.log(error);
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

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;

    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
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

const deletePropertyById = async (req, res) => {
  try {
    const id = req.params.id;

    await Property.deleteOne({ _id: id });
    return res.status(200).json({ message: "Property Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllUsers,
  deleteUserById,
  getUserById,
  updateUserById,

  getAllContacts,
  deleteContactById,

  getAllProperties,
  deletePropertyById,
};
