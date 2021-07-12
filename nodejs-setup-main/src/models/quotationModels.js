const db = require("../utils/database");

exports.getAllQuotation = async () => {
  try {
    const result = await db.query("SELECT quotation.id_quotation, customer.id_customer, customer.name_customer, customer.phone, customer.name_company, customer.email, quotation.cost, quotation.remark, quotation.last_added, quotation.status FROM quotation INNER JOIN customer ON quotation.id_customer = customer.id_customer");
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all quotation error: ${error}`);
  }
};

exports.getIdQuotation = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT quotation.id_quotation, customer.id_customer, customer.name_customer, customer.phone, customer.name_company, customer.email, quotation.cost, quotation.remark, quotation.last_added, quotation.status FROM quotation INNER JOIN customer ON quotation.id_customer = customer.id_customer WHERE quotation.id_quotation = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all quotation error: ${error}`);
  }
};

exports.getIdCustomer = async (req,res) => {
    try {
      let id = req.params.id;
      let result = await db.query("SELECT quotation.id_quotation, customer.id_customer, customer.name_customer, customer.phone, customer.name_company, customer.email, quotation.cost, quotation.remark, quotation.last_added, quotation.status FROM quotation INNER JOIN customer ON quotation.id_customer = customer.id_customer WHERE customer.id_customer = ?",[id]);
      return result[0]; //index 0 คือ return result
    } catch (error) {
      throw new Error(`Get all customer error: ${error}`);
    }
  };

exports.postNewQuotation = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let reqCreateNewQuotation = [
      req.body.id_quotation,
      req.body.id_customer,
      req.body.cost,
      req.body.remark,
      req.body.status,
      unixTimestamp,
      unixTimestamp,
      req.body.staffId,
      req.body.staffId
    ];
    
    let result = await db.query(
      "INSERT INTO `quotation`(id_quotation, id_customer, cost, remark, status, last_added, last_update, staff_create, staff_update) VALUES (?)",
      [reqCreateNewQuotation]);

    return result[0];
  } catch (error) {
      throw new Error(`Post new quotation error: ${error}`); 
  }
};

exports.putUpdateQuotation = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let id_quotation = req.body.id_quotation;
    let id_customer = req.body.id_customer;
    let cost = req.body.cost;
    let remark = req.body.remark;
    let status = req.body.status;
    let staff_create = req.body.staff_create;
    let staff_update = req.body.staff_update;

    if (cost) {
      let result = await db.query(
        "UPDATE quotation SET cost = ? WHERE id_quotation = ? and id_customer = ?", 
        [cost, id_quotation, id_customer]);
    }
    if (status) {
      let result = await db.query(
        "UPDATE quotation SET status = ? WHERE id_quotation = ? and id_customer = ?", 
        [status, id_quotation ,id_customer]);
    }
    if (remark) {
      let result = await db.query(
        "UPDATE quotation SET remark = ? WHERE id_quotation = ? and id_customer = ?", 
        [remark, id_quotation, id_customer]);
    }  
    
    let updateLast_added = await db.query(
        "UPDATE quotation SET last_added = ? WHERE id_quotation = ? and id_customer = ?", 
        [unixTimestamp, id_quotation ,id_customer]);
    let updateLast_update = await db.query(
        "UPDATE quotation SET last_update = ? WHERE id_quotation = ? and id_customer = ?", 
        [unixTimestamp, id_quotation , id_customer]);
    let updateStaff_create = await db.query(
        "UPDATE quotation SET staff_create = ? WHERE id_quotation = ? and id_customer = ?", 
        [staff_create, id_quotation , id_customer]);
    let updateStaff_update = await db.query(
        "UPDATE quotation SET staff_update = ? WHERE id_quotation = ? and id_customer = ?", 
        [staff_update, id_quotation , id_customer]);
  } catch (error) {
      throw new Error(`Put update quotation error: ${error}`); 
  } 
}

exports.deleteIdQuotation = async (req,res) => {
  try {
    let deleteId_quotation = req.body.id_quotation;
    let deleteId_customer = req.body.id_customer;
    
    let result = await db.query("DELETE FROM quotation WHERE id_quotation = ? and id_customer = ?", [deleteId_quotation, deleteId_customer]);

    return result[0];
  } catch (error) {
    throw new Error(`Get all quotation error: ${error}`);
  }
};