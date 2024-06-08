const express = require("express");
const adminController = require("../Controllers/Admin-controller");
const router = express.Router();
const authMiddleware = require("../Middleware/Auth-Middleware");
const adminMiddleware = require("../Middleware/Admin-Middleware");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router
  .route("/properties")
  .get(authMiddleware, adminMiddleware, adminController.getAllProperties);



module.exports = router;
