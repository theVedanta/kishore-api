const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ROUTES
router.post("/", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (await bcrypt.compare(password, user.password)) {
            const accessToken = jwt.sign(
                user.toJSON(),
                process.env.JWT_SECRET,
                {
                    expiresIn: "7d",
                }
            );

            res.json({ done: true, token: accessToken });
        } else {
            res.json({ done: false, message: "Invalid password" });
        }
    } catch (err) {
        console.log(err);
        res.json({ done: false, message: "Some error occurred" });
    }
});
router.post("/validate", async (req, res) => {
    const { token } = req.body;

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
        if (err) {
            res.json({ done: false, message: "Invalid token" });
        } else {
            const userFound = await User.findOne({ username: user.username });
            if (user.password === userFound.password) {
                res.json({ done: true });
            } else {
                res.json({ done: false, message: "Password changed" });
            }
        }
    });
});

module.exports = router;
