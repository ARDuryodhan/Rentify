// const bcrypt = require("bcryptjs");
const User = require("../Models/User-model");
const Property = require("../Models/Property-model"); 

// const round = 10;

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to Rentify Home Page");
  } catch (error) {
    console.log(error);
  }
};

//***Registration Logic**
const register = async (req, res, next) => {
  try {
    console.log("Registering user:", req.body);
    const { firstname, lastname, mobile, email, password } = req.body;

    if (!firstname || !lastname || !mobile || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    // Hash the password
    // const salt = await bcrypt.genSalt(10);

    // const hashedPassword = await bcrypt.hash(password, salt);

    const userCreate = await User.create({
      firstname,
      lastname,
      mobile,
      email,
      password,
    });
    console.log("User registered successfully:", userCreate);

    res.status(201).json({
      message: "User registered successfully",
      token: await userCreate.generateToken(),
      userId: userCreate._id.toString(),
    });
  } catch (error) {
    // console.error("Error registering user:", error);
    next(error);
  }
};

//***Login Logic**

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    // const userPassword = await bcrypt.compare(password, userExist.password);
    const userPassword = await userExist.comparePassword(password);

    if (userPassword) {
      res.status(200).json({
        message: "Login successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(400).json({ message: "invalid email or password" });
    }
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};

//***User Logic to get user data**

const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};

/**Add properties logic */

const properties = async (req, res) => {
  try {
    console.log(req.body);
    res.status(202).send("properties added");
  } catch (error) {
    res.status(420).send("properties not added");
  }
};

/* get properties data logic */
const propertiesData = async (req, res) => {
  try {
    const properties = await Property.find(); 
    res.status(200).json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ message: "Error fetching properties" });
  }
};


module.exports = { home, register, login, user, properties, propertiesData };