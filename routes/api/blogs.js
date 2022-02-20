const router = require("express").Router();
const Blog = require("../../models/Blog");

// ROUTES
// GET
router.get("/", async (req, res) => {
    const blogs = await Blog.find();
    res.json({ blogs });
});
router.get("/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.json({ blog });
});

// POST
router.post("/", async (req, res) => {
    const { title, tags, imgs, content } = req.body;
    const blog = new Blog({ title, tags, imgs, content });

    try {
        await blog.save();
        res.json({ done: true });
    } catch (err) {
        res.json({ err });
    }
});

module.exports = router;
