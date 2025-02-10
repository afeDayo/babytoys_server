// productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authenticate = require("../middlewares/authMiddleware");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
// Protect the rating endpoint:
router.post("/:id/rate", authenticate, productController.rateProduct);

module.exports = router;
