const db = require("../utils/database");

exports.getAllLog = async () => {
  try {
    const result = await db.query("SELECT * FROM log");
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all log error: ${error}`);
  }
};

exports.getIdLogStaff = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT * FROM log WHERE id_staff = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all log staff error: ${error}`);
  }
};

exports.postNewLog = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let reqCreateNewLog = [
      req.body.id_log,
      req.body.id_staff,
      req.body.name_log,
      req.body.detail_log,
      unixTimestamp
    ];
    
    let result = await db.query(
      "INSERT INTO `log`(id_log, id_staff, name_log, detail_log, last_update) VALUES (?)",
      [reqCreateNewLog]);

    return result[0];
  } catch (error) {
      throw new Error(`Post new log error: ${error}`); 
  }
};

exports.putUpdateLog = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let id_log = req.body.id_log;
    let id_staff = req.body.id_staff;
    let name_log = req.body.name_log;
    let detail_log = req.body.detail_log;

    if (id_staff) {
      let result = await db.query(
        "UPDATE log SET id_staff = ? WHERE id_log = ?", 
        [id_staff, id_log]);
    }
    if (name_log) {
      let result = await db.query(
        "UPDATE log SET name_log = ? WHERE id_log = ?", 
        [name_log, id_log]);
    }
    if (detail_log) {
        let result = await db.query(
          "UPDATE log SET detail_log = ? WHERE id_log = ?", 
          [detail_log, id_log]);
    }

    let updateLast_update = await db.query(
        "UPDATE log SET last_update = ? WHERE id_log = ?", 
        [unixTimestamp, id_log]);
  } catch (error) {
      throw new Error(`Put update log error: ${error}`); 
  } 
}

exports.deleteIdLog = async (req,res) => {
  try {
    let deleteId_log = req.params.id;
    
    let result = await db.query("DELETE FROM log WHERE id_log = ?", [deleteId_log]);

    return result[0];
  } catch (error) {
    throw new Error(`Get all log error: ${error}`);
  }
};