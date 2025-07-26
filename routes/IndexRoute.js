// importing necessary modules
const router = require("express").Router();

// setting the route
router.get("/", (req, res) => {
    res.send("Thanks for using neptune project!");
});

// exporting the router
module.exports = router;
