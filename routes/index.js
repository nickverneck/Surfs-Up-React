const router = require("express").Router();
const authRoutes = require("./auth");
const api = require("./api");
const path = require("path");
const surflineRoutes = require("./surfline")

// Routes for authentication
router.use("/auth", authRoutes);
// API
router.use("/api",api);
// SURFLINE
router.use("/surfline",surflineRoutes);
// If no API routes are hit, send the React app
router.use("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;