const db = require("../utils/database");

exports.getAllCustomer = async () => {
  try {
    const result = await db.query("SELECT customer.id_customer, customer.name_customer, customer.phone, customer.name_company, customer.email, customer.last_added FROM customer");
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all customer error: ${error}`);
  }
};

exports.getIdCustomer = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT customer.id_customer, customer.name_customer, customer.phone, customer.name_company, customer.email, customer.last_added FROM customer WHERE id_customer = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all customer error: ${error}`);
  }
};

exports.getNameCompany = async (req,res) => {
    try {
      let id = req.body.name_company;
      let result = await db.query("SELECT customer.id_customer, customer.name_customer, customer.phone, customer.name_company, customer.email, customer.last_added FROM customer WHERE name_company = ?",[id]);
      return result[0]; //index 0 คือ return result
    } catch (error) {
      throw new Error(`Get all Company error: ${error}`);
    }
  };

exports.postNewCustomer = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let reqCreateNewCustomer = [
      req.body.id_customer,
      req.body.name_customer,
      req.body.name_company,
      req.body.phone,
      req.body.email,
      unixTimestamp,
      unixTimestamp,
      req.body.staffId,
      req.body.staffId
    ];
    
    let result = await db.query(
      "INSERT INTO `customer`(id_customer, name_customer, name_company, phone, email, last_added, last_update, staff_create, staff_update) VALUES (?)",
      [reqCreateNewCustomer]);

    return result[0];
  } catch (error) {
      throw new Error(`Post new customer error: ${error}`); 
  }
};

exports.putUpdateCustomer = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let id_customer = req.body.id_customer;
    let name_customer = req.body.name_customer;
    let name_company = req.body.name_company;
    let phone = req.body.phone;
    let email = req.body.email;
    let staff_create = req.body.staff_create;
    let staff_update = req.body.staff_update;

    if (name_customer) {
      let result = await db.query(
        "UPDATE customer SET name_customer = ? WHERE id_customer = ?", 
        [name_customer, id_customer]);
    }
    if (name_company) {
      let result = await db.query(
        "UPDATE customer SET name_company = ? WHERE id_customer = ?", 
        [name_company, id_customer]);
    }
    if (phone) {
        let result = await db.query(
          "UPDATE customer SET phone = ? WHERE id_customer = ?", 
          [phone, id_customer]);
    }
    if (email) {
        let result = await db.query(
          "UPDATE customer SET email = ? WHERE id_customer = ?", 
          [email, id_customer]);
    }
    
    let updateLast_added = await db.query(
        "UPDATE customer SET last_added = ? WHERE id_customer = ?", 
        [unixTimestamp, id_customer]);
    let updateLast_update = await db.query(
        "UPDATE customer SET last_update = ? WHERE id_customer = ?", 
        [unixTimestamp, id_customer]);
    let updateStaff_create = await db.query(
        "UPDATE customer SET staff_create = ? WHERE id_customer = ?", 
        [staff_create, id_customer]);
    let updateStaff_update = await db.query(
        "UPDATE customer SET staff_update = ? WHERE id_customer = ?", 
        [staff_update, id_customer]);
  } catch (error) {
      throw new Error(`Put update customer error: ${error}`); 
  } 
}

exports.deleteIdCustomer = async (req,res) => {
  try {
    let deleteId_customer = req.params.id;
    
    let result = await db.query("DELETE FROM customer WHERE id_customer = ?", [deleteId_customer]);

    return result[0];
  } catch (error) {
    throw new Error(`Get all customer error: ${error}`);
  }
};