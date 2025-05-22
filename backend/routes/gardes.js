const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/',function(req, res){
    db.query(`SELECT
        candidate.FirstName, 
        candidate.lastName,
        candidate.Gender,
        grade.LicenseExamCategory,
        grade.ObtainedMarks,
        grade.Decision FROM grade JOIN candidate ON grade.CandidateNationalId = candidate.CandidateNationalId`,
    function(err, data){
        if(err) return res.status(500).json({error: err});
        res.json(data);
    });
});

router.post('/',function(req, res){
    const { CandidateNationalId,LicenseExamCategory, ObtainedMarks, Decision } = req.body;
    db.query(`INSERT INTO grade(CandidateNationalId, LicenseExamCategory, ObtainedMarks, Decision)
        VALUES(?,?,?,?)`, [CandidateNationalId,LicenseExamCategory, ObtainedMarks, Decision], function(err, data){
            if(err) return res.status(500).json({error: err});
            res.json({message: 'grades recorded successfuly'});
        });
});

router.put('/:id',function(req, res){
    const { CandidateNationalId,LicenseExamCategory, ObtainedMarks, Decision } = req.body;
    const { id } = req.params;
    db.query(`UPDATE grade SET CandidateNationalId = ?, LicenseExamCategory = ?, ObtainedMarks = ?, Decision = ?
        WHERE CandidateNationalId = ?`, [CandidateNationalId,LicenseExamCategory, ObtainedMarks, Decision, id],
        function(err, data){
            if(err) return res.status(500).json({error: err});
            res.json({message: 'grades Updated successfuly'});
        });
});


router.delete('/:id', function(req, res){
    const { id } = req.params;
    db.query(`DELETE FROM grade WHERE CandidateNationalId = ?`,
        [ id ],
        function(err, data){
            if(err) return res.status.error({error: err});
            res.json({message: 'grades removed successfully'});
        }
    );
});


module.exports = router;