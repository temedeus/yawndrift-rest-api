const express = require("express");
const router = express.Router();

router.get('/', async function (req, res, next) {
    try {
        res.json({
            route: 'jeps'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;