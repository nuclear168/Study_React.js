const db = require("../utils/database");

exports.getAllCertificate = async () => {
  try {
    const result = await db.query("SELECT certificate.id_certificate, certificate.id_prod, certificate.name_certificate, img_cer.url_img, certificate.dimension, certificate.weight, certificate.color, certificate.remark, certificate.last_added FROM certificate INNER JOIN img_cer ON certificate.id_certificate = img_cer.id_cer");
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all certificate error: ${error}`);
  }
};

exports.getIdCertificate = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT certificate.id_certificate, certificate.id_prod, certificate.name_certificate, img_cer.url_img, certificate.dimension, certificate.weight, certificate.color, certificate.remark, certificate.last_added FROM certificate INNER JOIN img_cer ON certificate.id_certificate = img_cer.id_cer WHERE certificate.id_certificate = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all certificate error: ${error}`);
  }
};

exports.postNewCertificate = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let reqCreateNewCertificate = [
      req.body.id_certificate,
      req.body.number_certificate,
      req.body.name_certificate,
      req.body.id_prod,
      req.body.color,
      req.body.weight,
      req.body.dimension,
      req.body.remark,
      unixTimestamp,
      unixTimestamp,
      req.body.staffId,
      req.body.staffId
    ];
    
    let result = await db.query(
      "INSERT INTO `certificate`(id_certificate, number_certificate, name_certificate, id_prod, color, weight, dimension, remark, last_added, last_update, staff_create, staff_update) VALUES (?)",
      [reqCreateNewCertificate]);

    return result[0];
  } catch (error) {
      throw new Error(`Post new certificate error: ${error}`); 
  }
};

exports.putUpdateCertificate = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let id_certificate = req.body.id_certificate;
    let number_certificate = req.body.number_certificate;
    let name_certificate = req.body.name_certificate;
    let id_prod = req.body.id_prod;
    let color = req.body.color;
    let weight = req.body.weight;
    let dimension = req.body.dimension;
    let remark = req.body.remark;
    let staff_create = req.body.staff_create;
    let staff_update = req.body.staff_update;

    if (name_certificate) {
      let result = await db.query(
        "UPDATE certificate SET name_certificate = ? WHERE id_certificate = ?", 
        [name_certificate, id_certificate]);
    }
    if (number_certificate) {
        let result = await db.query(
          "UPDATE certificate SET number_certificate = ? WHERE id_certificate = ?", 
          [number_certificate, id_certificate]);
      }
    if (id_prod) {
      let result = await db.query(
        "UPDATE certificate SET id_prod = ? WHERE id_certificate = ?", 
        [id_prod, id_certificate]);
    }
    if (color) {
      let result = await db.query(
        "UPDATE certificate SET color = ? WHERE id_certificate = ?", 
        [color, id_certificate]);
    }
    if (weight) {
      let result = await db.query(
        "UPDATE certificate SET weight = ? WHERE id_certificate = ?", 
        [weight, id_certificate]);
    }
    if (dimension) {
      let result = await db.query(
        "UPDATE certificate SET dimension = ? WHERE id_certificate = ?", 
        [dimension, id_certificate]);
    }
    if (remark) {
      let result = await db.query(
        "UPDATE certificate SET remark = ? WHERE id_certificate = ?", 
        [remark, id_certificate]);
    }
    
    let updateLast_added = await db.query(
        "UPDATE certificate SET last_added = ? WHERE id_certificate = ?", 
        [unixTimestamp, id_certificate]);
    let updateLast_update = await db.query(
        "UPDATE certificate SET last_update = ? WHERE id_certificate = ?", 
        [unixTimestamp, id_certificate]);
    let updateStaff_create = await db.query(
        "UPDATE certificate SET staff_create = ? WHERE id_certificate = ?", 
        [staff_create, id_certificate]);
    let updateStaff_update = await db.query(
        "UPDATE certificate SET staff_update = ? WHERE id_certificate = ?", 
        [staff_update, id_certificate]);
  } catch (error) {
      throw new Error(`Put update material error: ${error}`); 
  } 
}

exports.deleteIdCertificate = async (req,res) => {
  try {
    let deleteId_certificate = req.params.id;
    
    let result = await db.query("DELETE FROM certificate WHERE id_certificate = ?", [deleteId_certificate]);

    return result[0];
  } catch (error) {
    throw new Error(`Get all certificate error: ${error}`);
  }
};