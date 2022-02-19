const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: String,
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
