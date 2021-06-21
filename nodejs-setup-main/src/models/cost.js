const express = require("express");
const router = express.Router();
const dbCon = require('../../index-api');

router.get('/cost', (req, res) => {
    let last_added = res.query.last_added;
    let sql = 'SELECT * FROM cost';

    if(last_added){
        sql = ''
    }

    dbCon.query(sql, [last_added], (error, results, fields) => {
        if (error) throw error;

        let massage = "Successfully";

        return res.send({error:false, data:results, massage:massage});
    })
})

router.get('/cost/"id', (req, res) => {
    let id = req.params.id;

    dbCon.query('SELECT * FROM cost WHERE id_material = ?',[id] , (error, results, fields) => {
        if (error) throw error;

        let massage = "Successfully";

        return res.send({error:false, data:results, massage:massage});
    })
})

router.post('/cost', (req, res) => {
    dbCon.query('', [], (error, results, fields) => {
        if (error) throw error;

        let massage = "Successfully";
            
        return res.send({error:false, data:results, massage:massage});
    })
})

router.put('/cost/:id', (req, res) => {
    let id = req.params.id;

    dbCon.query('UPDATE `cost` SET price WHERE id_material = ?', [id], (error, results, fields) => {
        if (error) throw error;

        let massage = "Successfully";
            
        return res.send({error:false, data:results, massage:massage});
    })
})

router.delete('/cost/:id', (req, res) => {
    let id = req.params.id;

    dbCon.query('DELETE FROM cost WHERE cost.id_material = ?',[id],(error, results, fields) => {
        if (error) throw error;

        let massage = "Successfully";
            
        return res.send({error:false, data:results, massage:massage});
    })
})


module.exports = router;