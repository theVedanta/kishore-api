const mongoose = require("mongoose");

const IndexSchema = new mongoose.Schema({
    header: Object,
    about: Object,
    training: Object,
    consultancy: Object,
    testimonials: Object,
    contact: Object,
});

const Index = mongoose.model("index", IndexSchema);

module.exports = Index;
