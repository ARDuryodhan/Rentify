const jwt = require("jsonwebtoken");
const User = require("../Models/User-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  //   console.log(token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  try {
    // Verifying the token
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRETE_KEY);
    console.log(isVerified);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.token = token;
    req.user = userData;
    req.userID = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;
