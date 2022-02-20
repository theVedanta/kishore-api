const router = require("express").Router();

// ROUTES
router.use("/image", require("./image"));
router.use("/blogs", require("./blogs"));

module.exports = router