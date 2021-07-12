const db = require("../utils/database");

exports.getAllStaff = async () => {
  try {
    const result = await db.query("SELECT * FROM staff");
    return result[0]; 
  } catch (error) {
    throw new Error(`Get all staff error: ${error}`); 
  }
};

exports.getIdStaff = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT * FROM staff WHERE id_staff = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all staff error: ${error}`); 
  }
};

exports.postNewStaff = async (req,res) => {
  try {
    let postStaff = [
        req.body.name,
        req.body.position,
        req.body.email,
        req.body.password
    ];
    let result = await db.query(
      "INSERT INTO `staff`(name, position, email, password) VALUES (?)",
      [postStaff]);

    console.log(postStaff)
    console.log("result",result);
    return result[0];
  } catch (error) {
      throw new Error(`Post new staff error: ${error}`); 
  }
};

exports.putUpdateStaff = async (req,res) => {
  try {
    let updateId = req.body.id;
    let name = req.body.name;
    let position = req.body.position;
    let email = req.body.email;
    let password = req.body.password;

    if (name) {
      let result = await db.query(
        "UPDATE staff SET name = ? WHERE id_staff = ?", 
        [name, updateId]);
    }
    if (position) {
      let result = await db.query(
        "UPDATE staff SET position = ? WHERE id_staff = ?", 
        [position, updateId]);
    }
    if (email) {
      let result = await db.query(
        "UPDATE staff SET email = ? WHERE id_staff = ?", 
        [email, updateId]);
    }
    if (password) {
      let result = await db.query(
        "UPDATE staff SET password = ? WHERE id_staff = ?", 
        [password, updateId]);
    }
  } catch (error) {
      throw new Error(`Put update staff error: ${error}`); 
  } 
}

exports.deleteIdStaff = async (req,res) => {
  try {
    let deleteId = req.params.id;
    let result = await db.query("DELETE FROM staff WHERE id_staff = ?", [deleteId]);

    return result[0];
  } catch (error) {
    throw new Error(`Get all staff error: ${error}`);
  }
};