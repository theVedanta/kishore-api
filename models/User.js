const mongoose = require("mongoose");

const TheSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const ToExport = mongoose.model("user", TheSchema);

module.exports = ToExport;
