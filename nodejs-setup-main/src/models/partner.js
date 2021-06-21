const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const dbCon = require('../../index-api');

router.get("/" , (req, res) => {
    dbCon.query("SELECT * FROM partner", (req, res) => {
        if (error) throw error;

        let massage = "Successfully";

        return res.send({error:false, data:results, massage:massage});
    })
})

module.exports = router;