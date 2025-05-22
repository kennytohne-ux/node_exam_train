const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', function(req, res) {
    const cand = `SELECT COUNT(*) AS total_candidates FROM candidate`;
    const pass = `SELECT COUNT(*) AS total_pass FROM grade WHERE Decision = 'Pass'`;
    const fail = `SELECT COUNT(*) AS total_fail FROM grade WHERE Decision = 'Fail'`;

    db.query(cand, function(err, candResult) {
        if (err) return res.status(500).json({ error: err });

        db.query(pass, function(err, passResult) {
            if (err) return res.status(500).json({ error: err });

            db.query(fail, function(err, failResult) {
                if (err) return res.status(500).json({ error: err });

                res.json({
                    total_candidates: candResult[0].total_candidates,
                    total_pass: passResult[0].total_pass,
                    total_fail: failResult[0].total_fail
                });
            });
        });
    });
});

module.exports = router;