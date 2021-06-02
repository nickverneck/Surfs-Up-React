const router = require("express").Router();
const api = require("../controllers/api")
const auth = require("../middleware/auth");
// Routes start with /api
router.post("/savefavorite", api.savefavorite);

module.exports = router;