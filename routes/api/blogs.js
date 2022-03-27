const router = require("express").Router();
const Blog = require("../../models/Blog");

// ROUTES
// GET
router.get("/", async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ blogs });
});
router.get("/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.json({ blog });
});

// POST
router.post("/add", async (req, res) => {
    const { title, category, content } = req.body;
    const blog = new Blog({ title, category, content });

    try {
        await blog.save();
        res.json({ done: true });
    } catch (err) {
        res.json({ done: false, err });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        await Blog.deleteOne({ _id: req.params.id });
        res.json({ done: true });
    } catch (err) {
        console.log(err);
        res.json({ done: false, err });
    }
});

module.exports = router;
