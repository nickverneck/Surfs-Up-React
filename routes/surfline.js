const router = require("express").Router();
const surfline = require("../controllers/surfline")
router.get('/closestbeach',surfline.closestBeach);

module.exports = router;