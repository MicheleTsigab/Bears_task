import express from 'express';
import db from '../database/database.js';
import visitormodel from '../models/visitor_model.js';

const router = express.Router();

router.get('/',(req,res)=>{
    let sql = "select * from visitor"
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json(rows)
      });
});
router.get('/:id',(req,res)=>{
    let sql = "select * from visitor where id = ?"
    let params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json(row)
      });
});
router.post('/',(req,res)=>{
    var errors=[]
    if (!req.body.firstname){
        errors.push("No firstname specified");
    }
    if (!req.body.lastname){
        errors.push("No lastname specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    let date = new Date().toJSON();
    var data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        created_at:date
    }
    var sql ='INSERT INTO visitor (firstname, lastname, created_at) VALUES (?,?,?)'
    var params =[data.firstname, data.lastname, data.created_at]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
});
router.patch('/:id',(req,res)=>{
    var data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    }
    db.run(
        `UPDATE visitor set 
           firstname = COALESCE(?,firstname), 
           lastname = COALESCE(?,lastname)
           WHERE id = ?`,
        [data.firstname, data.lastname, req.params.id],
        function (err, result) {
            if (err){
                console.log(err.message);
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
 });
router.delete('/:id',(req,res)=>{
    db.run(
        'DELETE FROM visitor WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
});
export default router;