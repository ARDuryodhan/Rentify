const express = require("express");
const router = express.Router();
const contactusForm  = require("../Controllers/contact-controller")


router.route("/contactus").post(contactusForm);

module.exports = router;
