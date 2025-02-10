// paymentRoutes.js
const express = require("express");
const createPaymentIntent = require("../controllers/paymentController");
const authenticate = require("../middlewares/authMiddleware");

const router = express.Router();

// Wrap the payment intent creation endpoint with the authenticate middleware
router.post("/create-intent", authenticate, createPaymentIntent);

module.exports = router;
