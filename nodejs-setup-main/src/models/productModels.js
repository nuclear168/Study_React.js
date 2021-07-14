const db = require("../utils/database");

exports.getAllProduct = async () => {
  try {
    const result = await db.query("SELECT product.id_prod, product.description, product.comment, img_prod.url_img, rawmaterial.id_material, rawmaterial.origin, product.process, product.code, product.weight, product.id_recut, product.dimension, product.status, product.price, product.interest, product.decorate, product.travel, product.certificate, product.other_cost, product.last_added FROM product INNER JOIN img_prod ON product.id_prod = img_prod.id_prod INNER JOIN rawmaterial ON product.id_material = rawmaterial.id_material");
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all product error: ${error}`);
  }
};

exports.getIdProduct = async (req,res) => {
  try {
    let id = req.params.id;
    let result = await db.query("SELECT product.id_prod, product.description, product.comment, img_prod.url_img, rawmaterial.id_material, rawmaterial.origin, product.process, product.code, product.weight, product.id_recut, product.dimension, product.status, product.price, product.interest, product.decorate, product.travel, product.certificate, product.other_cost, product.last_added FROM product INNER JOIN img_prod ON product.id_prod = img_prod.id_prod INNER JOIN rawmaterial ON product.id_material = rawmaterial.id_material WHERE product.id_prod = ?",[id]);
    return result[0]; //index 0 คือ return result
  } catch (error) {
    throw new Error(`Get all product error: ${error}`);
  }
};

exports.postNewProduct = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let reqCreateNewProduct = [
      req.body.id_prod,
      req.body.id_material,
      req.body.price,
      req.body.status,
      req.body.parent,
      req.body.dimension,
      req.body.description,
      req.body.comment,
      req.body.remark,
      req.body.interest,
      req.body.decorate,
      req.body.travel,
      req.body.certificate,
      req.body.other_cost,
      req.body.id_recut,
      unixTimestamp,
      unixTimestamp,
      req.body.staffId,
      req.body.staffId
    ];
    
    let result = await db.query(
      "INSERT INTO `product`(id_prod, id_material, price, status, parent, dimension, description, comment, remark, interest, decorate, travel, certificate, other_cost, id_recut, last_added, last_update, staff_create, staff_update) VALUES (?)",
      [reqCreateNewProduct]);

    return result[0];
  } catch (error) {
      throw new Error(`Post new product error: ${error}`); 
  }
};

exports.putUpdateProduct = async (req,res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);

    let id_prod = req.body.id_prod;
    let id_material = req.body.id_material;
    let price = req.body.price;
    let status = req.body.status;
    let parent = req.body.parent;
    let dimension = req.body.dimension;
    let comment = req.body.comment;
    let remark = req.body.remark;
    let interest = req.body.interest;
    let decorate = req.body.decorate;
    let travel = req.body.travel;
    let certificate = req.body.certificate;
    let other_cost = req.body.other_cost;
    let id_recut = req.body.id_recut;
    let staff_create = req.body.staff_create;
    let staff_update = req.body.staff_update;

    if (id_material) {
      let result = await db.query(
        "UPDATE product SET id_material = ? WHERE id_prod = ?", 
        [id_material, id_prod]);
    }
    if (price) {
      let result = await db.query(
        "UPDATE product SET price = ? WHERE id_prod = ?", 
        [price, id_prod]);
    }
    if (status) {
      let result = await db.query(
        "UPDATE product SET status = ? WHERE id_prod = ?", 
        [status, id_prod]);
    }
    if (parent) {
      let result = await db.query(
        "UPDATE product SET parent = ? WHERE id_prod = ?", 
        [parent, id_prod]);
    }
    if (dimension) {
      let result = await db.query(
        "UPDATE product SET dimension = ? WHERE id_prod = ?", 
        [dimension, id_prod]);
    }
    if (comment) {
      let result = await db.query(
        "UPDATE product SET comment = ? WHERE id_prod = ?", 
        [comment, id_prod]);
    }
    if (remark) {
      let result = await db.query(
        "UPDATE product SET remark = ? WHERE id_prod = ?", 
        [remark, id_prod]);
    }
    if (interest) {
      let result = await db.query(
        "UPDATE product SET interest = ? WHERE id_prod = ?", 
        [interest, id_prod]);
    }
    if (decorate) {
      let result = await db.query(
        "UPDATE product SET decorate = ? WHERE id_prod = ?", 
        [decorate, id_prod]);
    }
    if (travel) {
      let result = await db.query(
        "UPDATE product SET travel = ? WHERE id_prod = ?", 
        [travel, id_prod]);
    }
    if (certificate) {
      let result = await db.query(
        "UPDATE product SET certificate = ? WHERE id_prod = ?", 
        [certificate, id_prod]);
    }
    if (other_cost) {
      let result = await db.query(
        "UPDATE product SET other_cost = ? WHERE id_prod = ?", 
        [other_cost, id_prod]);
    }
    if (id_recut) {
      let result = await db.query(
        "UPDATE product SET id_recut = ? WHERE id_prod = ?", 
        [id_recut, id_prod]);
    }    
    
    let updateLast_added = await db.query(
        "UPDATE product SET last_added = ? WHERE id_prod = ?", 
        [unixTimestamp, id_prod]);
    let updateLast_update = await db.query(
        "UPDATE product SET last_update = ? WHERE id_prod = ?", 
        [unixTimestamp, id_prod]);
    let updateStaff_create = await db.query(
        "UPDATE product SET staff_create = ? WHERE id_prod = ?", 
        [staff_create, id_prod]);
    let updateStaff_update = await db.query(
        "UPDATE product SET staff_update = ? WHERE id_prod = ?", 
        [staff_update, id_prod]);
  } catch (error) {
      throw new Error(`Put update material error: ${error}`); 
  } 
}

exports.deleteIdProduct = async (req,res) => {
  try {
    let deleteId_prod = req.params.id;
    
    let result = await db.query("DELETE FROM product WHERE id_prod = ?", [deleteId_prod]);

    return result[0];
  } catch (error) {
    throw new Error(`Get all product error: ${error}`);
  }
};