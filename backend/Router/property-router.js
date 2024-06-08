const express = require("express");
const propertiesForm = require("../Controllers/property-controller"); 
const { propertiesData } = require("../Controllers/auth-controller");


const router = express.Router();

router.route("/properties").post(propertiesForm);
router.route("/properties").get(propertiesData); 

module.exports = router;

