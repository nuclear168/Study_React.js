const db = require("../utils/database");

exports.getAllOrder = async () => {
  try {
    const result = await db.query("SELECT * FROM `order`");
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all order error: ${error}`);
  }
};

exports.getIdProduct = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT * FROM `order` WHERE id_prod = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all order error: ${error}`);
  }
};

exports.getIdQuotation = async (req,res) => {
    try {
      let id = req.params.id;
      let result = await db.query("SELECT * FROM `order` WHERE id_quotation = ?",[id]);
      return result[0]; //index 0 คือ return result
    } catch (error) {
      throw new Error(`Get all quotation error: ${error}`);
    }
  };

exports.postNewOrder = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let reqCreateNewOrder = [
      req.body.id_quotation,
      req.body.id_prod,
      req.body.qty,
      req.body.price_per_unit,
      unixTimestamp,
      unixTimestamp,
      req.body.staffId,
      req.body.staffId
    ];
    
    let result = await db.query(
      "INSERT INTO `order`(id_quotation, id_prod, qty, price_per_unit,  last_added, last_update, staff_create, staff_update) VALUES (?)",
      [reqCreateNewOrder]);

    return result[0];
  } catch (error) {
      throw new Error(`Post new order error: ${error}`); 
  }
};

exports.putUpdateOrder = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let id_quotation = req.body.id_quotation;
    let id_prod = req.body.id_prod;
    let qty = req.body.qty;
    let price_per_unit = req.body.price_per_unit;
    let staff_create = req.body.staff_create;
    let staff_update = req.body.staff_update;

    if (qty) {
      let result = await db.query(
        "UPDATE `order` SET qty = ? WHERE id_quotation = ? and id_prod = ?", 
        [qty, id_quotation, id_prod]);
    }
    if (price_per_unit) {
      let result = await db.query(
        "UPDATE `order` SET price_per_unit = ? WHERE id_quotation = ? and id_prod = ?", 
        [price_per_unit, id_quotation, id_prod]);
    }  
    
    let updateLast_added = await db.query(
        "UPDATE `order` SET last_added = ? WHERE id_quotation = ? and id_prod = ?", 
        [unixTimestamp, id_quotation ,id_prod]);
    let updateLast_update = await db.query(
        "UPDATE `order` SET last_update = ? WHERE id_quotation = ? and id_prod = ?", 
        [unixTimestamp, id_quotation , id_prod]);
    let updateStaff_create = await db.query(
        "UPDATE `order` SET staff_create = ? WHERE id_quotation = ? and id_prod = ?", 
        [staff_create, id_quotation , id_prod]);
    let updateStaff_update = await db.query(
        "UPDATE `order` SET staff_update = ? WHERE id_quotation = ? and id_prod = ?", 
        [staff_update, id_quotation , id_prod]);
  } catch (error) {
      throw new Error(`Put update order error: ${error}`); 
  } 
}

exports.deleteIdOrder = async (req,res) => {
  try {
    let deleteId_quotation = req.body.id_quotation;
    let deleteId_prod = req.body.id_prod;
    
    let result = await db.query("DELETE FROM `order` WHERE id_quotation = ? and id_prod = ?", [deleteId_quotation, deleteId_prod]);

    return result[0];
  } catch (error) {
    throw new Error(`Get all order error: ${error}`);
  }
};