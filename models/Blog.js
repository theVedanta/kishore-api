const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
    {
        title: String,
        imgs: Array,
        content: String,
        tags: Array,
    },
    { timestamps: true }
);

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
