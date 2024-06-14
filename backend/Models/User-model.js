const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  console.log("pre method",this);
  
  const user = this;

  if (!user.isModified( "password")) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
  } catch (error) {
    next(error);
  }
});

//compare password for login

userSchema.methods.comparePassword = async function(password){
  return bcrypt.compare(password, this.password)
}

//Json Web Token(JWT)
userSchema.methods.generateToken = async function () {
  try {
    return JWT.sign(
      {
        userId: this._id.toString(),
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRETE_KEY,
      {
        expiresIn: "15d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};




//model collections
const User = new mongoose.model("User", userSchema);

module.exports = User;