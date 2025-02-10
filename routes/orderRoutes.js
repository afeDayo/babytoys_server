// orderRoutes.js
const express = require("express");
const createOrder = require("../controllers/orderController");
const authenticate = require("../middlewares/authMiddleware");

const router = express.Router();

// Wrap the order creation endpoint with the authenticate middleware
router.post("/", authenticate, createOrder);

module.exports = router;
