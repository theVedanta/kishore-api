const router = require("express").Router();

// ROUTES
router.use("/image", require("./image"));
router.use("/blogs", require("./blogs"));
router.use("/cms", require("./cms"));

module.exports = router