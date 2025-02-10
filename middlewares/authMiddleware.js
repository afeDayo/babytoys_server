// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "No token provided, authorization denied." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach decoded user information (e.g., user id) to req.user
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid." });
  }
};

module.exports = authenticate;
