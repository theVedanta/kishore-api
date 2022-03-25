const router = require("express").Router();
const Index = require("../../models/Index");

const indexID = "623d5c8ec777484844a79678";

// ROUTES
router.get("/", async (req, res) => {
    const index = await Index.findById(indexID);
    res.json({ index });
});

router.put("/update", async (req, res) => {
    try {
        await Index.updateOne({ _id: indexID }, { $set: req.body });
        res.json({ done: true });
    } catch (err) {
        res.json({ done: false });
    }
});

module.exports = router;
