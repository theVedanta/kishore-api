const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
    {
        title: String,
        category: String,
        content: String,
    },
    { timestamps: true }
);

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
