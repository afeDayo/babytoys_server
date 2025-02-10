const express = require("express");

const {
  getCart,
  addToCart,
  updateQuantity,
  removeFromCart,
} = require("../controllers/cartController");
const authenticate = require("../middlewares/authMiddleware"); // make sure this path is correct

const router = express.Router();

// Protect cart routes by applying the middleware
router.get("/", authenticate, getCart);
router.post("/add", authenticate, addToCart);
router.put("/:productId", authenticate, updateQuantity);
router.delete("/:productId", authenticate, removeFromCart);

module.exports = router;
