const db = require("../utils/database");

exports.getAllImg_cer = async () => {
  try {
    const result = await db.query("SELECT * FROM img_cer");
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all img_cer error: ${error}`);
  }
};

exports.getImg_cerFormId_cer = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT * FROM img_cer WHERE id_cer = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all img_cer error: ${error}`);
  }
};

exports.postNewImg_cer = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let reqCreateNewImg_cer = [
      req.body.id_cer,
      req.body.id_img_cer,
      req.body.url_img,
      req.body.staff_create,
      req.body.staff_update,
    ];
    
    let result = await db.query(
      "INSERT INTO `img_cer`(id_cer, id_img_cer, url_img, staff_create, staff_update) VALUES (?)",
      [reqCreateNewImg_cer]);

    return result[0];
  } catch (error) {
      throw new Error(`Post new img_cer error: ${error}`); 
  }
};

exports.putUpdateImg_cer = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let id_img_cer = req.body.id_img_cer;
    let id_cer = req.body.id_cer;
    let url_img = req.body.url_img;
    let staff_create = req.body.staff_create;
    let staff_update = req.body.staff_update;

    if (url_img) {
        let result = await db.query(
          "UPDATE img_cer SET url_img = ? WHERE id_cer = ? AND id_img_cer = ?", 
          [url_img, id_cer, id_img_cer]);
    }
    
    let updateStaff_create = await db.query(
        "UPDATE img_cer SET staff_create = ? WHERE id_cer = ?", 
        [staff_create, id_cer]);
    let updateStaff_update = await db.query(
        "UPDATE img_cer SET staff_update = ? WHERE id_cer = ?", 
        [staff_update, id_cer]);
  } catch (error) {
      throw new Error(`Put update material error: ${error}`); 
  } 
}

exports.deleteIdImg_cer = async (req,res) => {
  try {
    let deleteId_cer = req.params.id;
    
    let result = await db.query("DELETE FROM img_cer WHERE id_cer = ?", [deleteId_cer]);

    return result[0];
  } catch (error) {
    throw new Error(`Get all img_cer error: ${error}`);
  }
};