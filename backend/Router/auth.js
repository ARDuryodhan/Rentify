const express = require("express")
const authcontroller = require("../Controllers/auth-controller");
const {singupSchema, loginSchema} = require("../Validators/auth-validator");
const validate = require("../Middleware/Validate-Middleware");
const authMiddleware = require("../Middleware/Auth-Middleware")

const router = express.Router();

router.route("/").get(authcontroller.home);

router.route("/register").post(validate(singupSchema), authcontroller.register);

router.route("/login").post(validate(loginSchema), authcontroller.login);

router.route("/user").get(authMiddleware, authcontroller.user);



module.exports = router;
