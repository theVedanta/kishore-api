const router = require("express").Router();

// ROUTES
router.get("/", (req, res) => {
    res.send("Welcome to admin");
});

module.exports = router;
