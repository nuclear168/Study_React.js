const express = require("express");
const router = express.Router();
const query = require("./dbConnection");

router.get("/rawMaterial", async (req, res) => {
  let sql = "SELECT * FROM rawMaterial";
  let last_added = req.query.last_added;

  if (last_added) {
    sql =
      "SELECT rawMaterial.id_material, rawMaterial.description, rawMaterial.last_added, rawMaterial.last_update, rawMaterial.staff_create, rawMaterial.staff_update FROM rawMaterial WHERE rawMaterial.last_added LIKE ?";
  }

  let results = await query(sql);
  console.log(results)
  let message = "Successfully";

  return res.send({ error: false, data: results, message: message });
});
//async เอาไว้ซิงข้อมูล ว่าอันไหนเข้าก่อนเข้าหลัง await ให่รู้ว่าอันไหนเสร็จก่อนหเสร็จหลัง


router.get("/rawMaterial/:id", (req, res) => {
  let id = req.params.id;

  dbCon.query(
    "SELECT * FROM rawMaterial WHERE id_material = ? ",
    [id],
    (error, results, fields) => {
      if (error) throw error;

      let massage = "Successfully";

      return res.send({ error: false, data: results, massage: massage });
    }
  );
});

router.post("/rawMaterial", (req, res) => {
  dbCon.query(
    "INSERT INTO `rawMaterial`(origin,weight,amount,price,status,description,saler,last_added,last_update,staff_create,staff_update) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )",
    [
      origin,
      weight,
      amount,
      price,
      status,
      description,
      saler,
      last_added,
      last_update,
      staff_create,
      staff_update,
    ],
    (error, results, fields) => {
      if (error) throw error;

      let massage = "Successfully";

      return res.send({ error: false, data: results, massage: massage });
    }
  );
});

router.put("/rawMaterial/:id", (req, res) => {
  let id = req.params.id;

  dbCon.query(
    "UPDATE `rawMaterial` SET price WHERE id_material = ?",
    [id],
    (error, results, fields) => {
      if (error) throw error;

      let massage = "Successfully";

      return res.send({ error: false, data: results, massage: massage });
    }
  );
});

router.delete("/rawMaterial/:id", (req, res) => {
  let id = req.params.id;

  dbCon.query(
    "DELETE FROM rawMaterial WHERE rawMaterial.id_material = ?",
    [id],
    (error, results, fields) => {
      if (error) throw error;

      let massage = "Successfully";

      return res.send({ error: false, data: results, massage: massage });
    }
  );
});

module.exports = router;
