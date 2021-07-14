const db = require("../utils/database");

exports.getAllMaterial = async () => {
  try {//ให้ลองทำอะไรบางอย่าง excute เพื่อต้องการ result ที่ต้องการออกมา
    
    // const result = await db.query("SELECT * FROM rawmaterial");
    const result = await db.query("SELECT rawmaterial.id_material, rawmaterial.description, rawmaterial.origin, rawmaterial.weight, rawmaterial.saler, rawmaterial.amount, rawmaterial.price, rawmaterial.remark, partner_material.id_partner, partner.name_partner, partner_material.percent, product.id_prod, rawmaterial.status, rawmaterial.last_added FROM rawmaterial JOIN partner_material ON rawmaterial.id_material = partner_material.id_material JOIN product ON rawmaterial.id_material = product.id_material JOIN partner ON partner_material.id_partner = partner.id_partner");

    return result[0]; //index 0 คือ return result
  } catch (error) {
    //จับ error เพื่อให้รู้ว่าหากมันพัง มันพังจากจุดนี้
    throw new Error(`Get all material error: ${error}`); //throw เพื่อหยุด process ชั่วคราวจนกว่าจะแก้ไข error เหมือนขัดไว้
    //new ประกาศ object ขึ้นมาใหม่ เพื่อไม่ให้ซ้ำกับของเดิม //${error} จะโชว์พารามิเตอร์ที่ส่งเข้ามา
  }
};
//ฟังก์ชันที่ไม่ต้องการพารามิเตอร์

exports.getIdMaterial = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT rawmaterial.id_material, rawmaterial.description, rawmaterial.origin, rawmaterial.weight, rawmaterial.saler, rawmaterial.amount, rawmaterial.price, rawmaterial.remark, partner_material.id_partner, partner.name_partner, partner_material.percent, product.id_prod, rawmaterial.status, rawmaterial.last_added FROM rawmaterial JOIN partner_material ON rawmaterial.id_material = partner_material.id_material JOIN product ON rawmaterial.id_material = product.id_material JOIN partner ON partner_material.id_partner = partner.id_partner WHERE rawmaterial.id_material = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all material error: ${error}`); 
  }
};

exports.postNewMaterial = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let reqCreateNewMaterial = [
      req.body.origin,
      req.body.dimension,
      req.body.amount,
      req.body.price,
      req.body.status,
      req.body.saler,
      req.body.description,
      unixTimestamp,
      unixTimestamp,
      req.body.staffId,
      req.body.staffId
    ];
    
    let result = await db.query(
      "INSERT INTO `rawmaterial`(origin, dimension, amount, price, status, saler, description, last_added, last_update, staff_create, staff_update) VALUES (?)",
      [reqCreateNewMaterial]);

    return result[0];
  } catch (error) {
      throw new Error(`Post new material error: ${error}`); 
  }
};

exports.putUpdateMaterial = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let updateId = req.body.id_material;
    let origin = req.body.origin;
    let dimension = req.body.dimension;
    let amount = req.body.amount;
    let price = req.body.price;
    let status = req.body.status;
    let saler = req.body.saler;
    let description = req.body.description;
    let staff_create = req.body.staff_create;
    let staff_update = req.body.staff_update;

    if (origin) {
      let result = await db.query(
        "UPDATE rawmaterial SET origin = ? WHERE 	id_material = ?", 
        [origin, updateId]);
    }
    if (dimension) {
      let result = await db.query(
        "UPDATE rawmaterial SET dimension = ? WHERE 	id_material = ?", 
        [dimension, updateId]);
    }
    if (amount) {
      let result = await db.query(
        "UPDATE rawmaterial SET amount = ? WHERE 	id_material = ?", 
        [amount, updateId]);
    }
    if (price) {
      let result = await db.query(
        "UPDATE rawmaterial SET price = ? WHERE 	id_material = ?", 
        [price, updateId]);
    }
    if (status) {
      let result = await db.query(
        "UPDATE rawmaterial SET status = ? WHERE 	id_material = ?", 
        [status, updateId]);
    }
    if (saler) {
      let result = await db.query(
        "UPDATE rawmaterial SET saler = ? WHERE 	id_material = ?", 
        [saler, updateId]);
    }
    if (description) {
      let result = await db.query(
        "UPDATE rawmaterial SET description = ? WHERE 	id_material = ?", 
        [description, updateId]);
    }
    
    let updateLast_added = await db.query(
      "UPDATE rawmaterial SET last_added = ? WHERE 	id_material = ?", 
      [unixTimestamp, updateId]);
    let updateLast_update = await db.query(
      "UPDATE rawmaterial SET last_update = ? WHERE 	id_material = ?", 
      [unixTimestamp, updateId]);
    let updateStaff_create = await db.query(
      "UPDATE rawmaterial SET staff_create = ? WHERE 	id_material = ?", 
      [staff_create, updateId]);
    let updateStaff_update = await db.query(
      "UPDATE rawmaterial SET staff_update = ? WHERE 	id_material = ?", 
      [staff_update, updateId]);
  } catch (error) {
      throw new Error(`Put update material error: ${error}`); 
  } 
}

exports.deleteIdMaterial = async (req,res) => {
  try {
    let deleteId = req.params.id;
    let result = await db.query("DELETE FROM rawmaterial WHERE id_material = ?", [deleteId]);

    return result[0];
  } catch (error) {
    //จับ error เพื่อให้รู้ว่าหากมันพัง มันพังจากจุดนี้
    throw new Error(`Get all material error: ${error}`);
  }
};