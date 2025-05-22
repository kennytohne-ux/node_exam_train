const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/', function(req, res){
    const { AdminName, Password } = req.body;
    db.query(`SELECT * FROM admin WHERE AdminName = ? AND password = ?`, [AdminName, Password] , 
        function(err, data){
            if(err) return res.status(500).json({error: err});
            if(data.length == 0){
                res.json({message: 'User Not found'});
            }
            else{
                res.json({message: 'Login success', user: data[0]});
            }
        }
    );
});

module.exports = router;