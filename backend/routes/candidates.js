const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', function(req, res){
    db.query(`SELECT * FROM candidate`, function(err, data){
        if(err) return res.status(500).json({error: err});
        res.json(data);
    });
});

router.get('/:id', function(req, res){
    const { id } = req.params; 
    db.query(`SELECT * FROM candidate WHERE CandidateNationalId = ?`, [ id ] , function(err, data){
        if(err) return res.status(500).json({error: err});
        res.json(data);
    });
});

router.post('/', function(req, res){
    const { FirstName, LastName, Gender, DOB, ExamDate } = req.body;
    db.query(`INSERT INTO candidate( FirstName, LastName, Gender, DOB, ExamDate) VALUES (?,?,?,?,?)`,
        [ FirstName, LastName, Gender, DOB, ExamDate ],
        function(err, data){
            if(err) return res.status.error({error: err});
            res.json({message: 'candidate Inserted successfully'});
        }
    );
});

router.put('/:id', function(req, res){
    const { FirstName, LastName, Gender, DOB, ExamDate } = req.body;
    const { id } = req.params;
    db.query(`UPDATE candidate SET FirstName = ?, LastName = ?, Gender = ?, DOB = ?, ExamDate = ? WHERE CandidateNationalId = ?`,
        [ FirstName, LastName, Gender, DOB, ExamDate, id ],
        function(err, data){
            if(err) return res.status.error({error: err});
            res.json({message: 'candidate Updated successfully'});
        }
    );
});

router.delete('/:id', function(req, res){
    const { id } = req.params;
    db.query(`DELETE FROM candidate WHERE CandidateNationalId = ?`,
        [ id ],
        function(err, data){
            if(err) return res.status.error({error: err});
            res.json({message: 'candidate Deleted successfully'});
        }
    );
});


module.exports = router;