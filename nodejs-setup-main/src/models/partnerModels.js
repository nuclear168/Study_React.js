const db = require("../utils/database");

exports.getAllPartner = async () => {
  try {
    const result = await db.query("SELECT partner.id_partner, partner.name_partner, partner.name_company, partner.phone, partner.remark, partner.email, partner.last_added FROM partner");
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all partner error: ${error}`);
  }
};

exports.getIdPartner = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT partner.id_partner, partner.name_partner, partner.name_company, partner.phone, partner.remark, partner.email, partner.last_added FROM partner WHERE id_partner = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all partner error: ${error}`);
  }
};

exports.postNewPartner = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let reqCreateNewPartner = [
      req.body.id_partner,
      req.body.name_partner,
      req.body.phone,
      req.body.email,
      req.body.remark,
      unixTimestamp,
      unixTimestamp,
      req.body.staffId,
      req.body.staffId
    ];
    
    let result = await db.query(
      "INSERT INTO `partner`(id_partner, name_partner, phone, email, remark, last_added, last_update, staff_create, staff_update) VALUES (?)",
      [reqCreateNewPartner]);

    return result[0];
  } catch (error) {
      throw new Error(`Post new partner error: ${error}`); 
  }
};

exports.putUpdatePartner = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let id_partner = req.body.id_partner;
    let name_partner = req.body.name_partner;
    let phone = req.body.phone;
    let email = req.body.email;
    let remark = req.body.remark;
    let staff_create = req.body.staff_create;
    let staff_update = req.body.staff_update;

    if (name_partner) {
      let result = await db.query(
        "UPDATE partner SET name_partner = ? WHERE id_partner = ?", 
        [name_partner, id_partner]);
    }
    if (phone) {
        let result = await db.query(
          "UPDATE partner SET phone = ? WHERE id_partner = ?", 
          [phone, id_partner]);
    }
    if (email) {
        let result = await db.query(
          "UPDATE partner SET email = ? WHERE id_partner = ?", 
          [email, id_partner]);
    }
    if (remark) {
        let result = await db.query(
          "UPDATE partner SET remark = ? WHERE id_partner = ?", 
          [remark, id_partner]);
    }
    
    let updateLast_added = await db.query(
        "UPDATE partner SET last_added = ? WHERE id_partner = ?", 
        [unixTimestamp, id_partner]);
    let updateLast_update = await db.query(
        "UPDATE partner SET last_update = ? WHERE id_partner = ?", 
        [unixTimestamp, id_partner]);
    let updateStaff_create = await db.query(
        "UPDATE partner SET staff_create = ? WHERE id_partner = ?", 
        [staff_create, id_partner]);
    let updateStaff_update = await db.query(
        "UPDATE partner SET staff_update = ? WHERE id_partner = ?", 
        [staff_update, id_partner]);
  } catch (error) {
      throw new Error(`Put update material error: ${error}`); 
  } 
}

exports.deleteIdPartner = async (req,res) => {
  try {
    let deleteId_partner = req.params.id;
    
    let result = await db.query("DELETE FROM partner WHERE id_partner = ?", [deleteId_partner]);

    return result[0];
  } catch (error) {
    throw new Error(`Get all partner error: ${error}`);
  }
};