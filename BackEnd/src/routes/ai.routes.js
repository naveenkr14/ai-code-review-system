const express = require('express');
const aiController = require("../controllers/ai.controller");

const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "AI route working"
    });
});

router.post("/get-review", aiController.getReview);

module.exports = router;