const db = require("../utils/database");

exports.getAllPartner_Material = async () => {
  try {
    const result = await db.query("SELECT * FROM partner_material");
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all partner_material error: ${error}`);
  }
};

exports.getIdMaterial = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT * FROM partner_material WHERE id_material = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all material error: ${error}`);
  }
};
// material 1 id มีกี่ partner

exports.getIdPartner = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT * FROM partner_material WHERE id_partner = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all partner error: ${error}`);
  }
};
// partner 1 คน มีกี่ material

exports.postNewPartner_Material = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let reqCreateNewPartner_Material = [
      req.body.id_material,
      req.body.id_partner,
      req.body.percent,
      unixTimestamp,
      unixTimestamp,
      req.body.staffId,
      req.body.staffId
    ];
    
    let result = await db.query(
      "INSERT INTO `partner_material`(id_material, id_partner, percent, last_added, last_update, staff_create, staff_update) VALUES (?)",
      [reqCreateNewPartner_Material]);

    return result[0];
  } catch (error) {
      throw new Error(`Post new partner_material error: ${error}`); 
  }
};

exports.putUpdatePartner_Material = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let id_material = req.body.id_material;
    let id_partner = req.body.id_partner;
    let percent = req.body.percent;
    let staff_create = req.body.staff_create;
    let staff_update = req.body.staff_update;

    if (percent) {
      let result = await db.query(
        "UPDATE partner_material SET percent = ? WHERE id_material = ? and id_partner = ?", 
        [percent, id_material, id_partner]);
      let updateLast_added = await db.query(
        "UPDATE partner_material SET last_added = ? WHERE id_material = ? and id_partner = ?", 
        [unixTimestamp, id_material, id_partner]);
      let updateLast_update = await db.query(
        "UPDATE partner_material SET last_update = ? WHERE id_material = ? and id_partner = ?", 
        [unixTimestamp, id_material, id_partner]);
      let updateStaff_create = await db.query(
        "UPDATE partner_material SET staff_create = ? WHERE id_material = ? and id_partner = ?", 
        [staff_create, id_material, id_partner]);
      let updateStaff_update = await db.query(
        "UPDATE partner_material SET staff_update = ? WHERE id_material = ? and id_partner = ?", 
        [staff_update, id_material, id_partner]);
    }
  } catch (error) {
      throw new Error(`Put update material error: ${error}`); 
  } 
}

exports.deleteIdPartner_Material = async (req,res) => {
  try {
    let deleteId_material = req.body.id_material;
    let deleteId_partner = req.body.id_partner;
    
    let result = await db.query("DELETE FROM partner_material WHERE id_material = ? and id_partner = ?", [deleteId_material, deleteId_partner]);

    return result[0];
  } catch (error) {
    throw new Error(`Get all material error: ${error}`);
  }
};