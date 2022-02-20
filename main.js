if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
const dbURI = process.env.DB_URL;

// DB CONNECTION
const connectDB = () => {
    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
};
connectDB();

// SETTINGS
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));

// ROUTES
app.use("/api", require("./routes/api/api"));
app.use("/admin", require("./routes/admin/admin"));
app.get("/", (req, res) => {
    res.redirect("https://github.com/theVedanta/kishore-api");
});
app.get("*", (req, res) => {
    res.sendStatus(404);
});
