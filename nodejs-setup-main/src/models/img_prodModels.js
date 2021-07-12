const db = require("../utils/database");

exports.getAllImg_prod = async () => {
  try {
    const result = await db.query("SELECT * FROM img_prod");
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all img_prod error: ${error}`);
  }
};

exports.getIdImg_prod = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT * FROM img_prod WHERE id_prod = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all img_prod error: ${error}`);
  }
};

exports.postNewImg_prod = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let reqCreateNewImg_prod = [
      req.body.id_prod,
      req.body.id_img_prod,
      req.body.url_img,
      req.body.staff_create,
      req.body.staff_update,
    ];
    
    let result = await db.query(
      "INSERT INTO `img_prod`(id_prod, id_img_prod, url_img, staff_create, staff_update) VALUES (?)",
      [reqCreateNewImg_prod]);

    return result[0];
  } catch (error) {
      throw new Error(`Post new img_prod error: ${error}`); 
  }
};

exports.putUpdateImg_prod = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let id_img = req.body.id_img_prod;
    let url_img = req.body.url_img;
    let staff_create = req.body.staff_create;
    let staff_update = req.body.staff_update;

    if (url_img) {
        let result = await db.query(
          "UPDATE img_prod SET url_img = ? WHERE id_img_prod = ?", 
          [url_img, id_img]);
    }
    
    let updateStaff_create = await db.query(
        "UPDATE img_prod SET staff_create = ? WHERE id_prod = ?", 
        [staff_create, id_prod]);
    let updateStaff_update = await db.query(
        "UPDATE img_prod SET staff_update = ? WHERE id_prod = ?", 
        [staff_update, id_prod]);
  } catch (error) {
      throw new Error(`Put update material error: ${error}`); 
  } 
}

exports.deleteIdImg_prod = async (req,res) => {
  try {
    let deleteId_img_prod = req.params.id;
    
    let result = await db.query("DELETE FROM img_prod WHERE id_img_prod = ?", [deleteId_img_prod]);
  
    return result[0];
  } catch (error) {
    throw new Error(`Get all img_prod error: ${error}`);
  }
};