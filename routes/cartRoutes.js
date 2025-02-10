const express = require("express");

const {
  getCart,
  addToCart,
  updateQuantity,
  removeFromCart,
} = require("../controllers/cartController");

const router = express.Router();

router.get("/", getCart);

router.post("/add", addToCart);

router.put("/:productId", updateQuantity);

router.delete("/:productId", removeFromCart);

module.exports = router;
