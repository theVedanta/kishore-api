const mongoose = require("mongoose");

const TheSchema = new mongoose.Schema({
    header: Object,
    about: String,
    training: Object,
    consultancy: Object,
    testimonials: Array,
    contacts: Array,
});

const ToExport = mongoose.model("index", TheSchema);

module.exports = ToExport;
