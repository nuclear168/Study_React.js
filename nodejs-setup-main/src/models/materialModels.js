const db = require("../utils/database");

exports.getAllMaterial = async () => {
  try {
    //ให้ลองทำอะไรบางอย่าง excute เพื่อต้องการ result ที่ต้องการออกมา
    const result = await db.query("SELECT * FROM rawMaterial");
    return result[0]; //index 0 คือ return result
  } catch (error) {
    //จับ error เพื่อให้รู้ว่าหากมันพัง มันพังจากจุดนี้
    throw new Error(`Get all material error: ${error}`); //throw เพื่อหยุด process ชั่วคราวจนกว่าจะแก้ไข error เหมือนขัดไว้
    //new ประกาศ object ขึ้นมาใหม่ เพื่อไม่ให้ซ้ำกับของเดิม //${error} จะโชว์พารามิเตอร์ที่ส่งเข้ามา
  }
};

exports.postNewMaterial = async (
  origin,
  weight,
  amount,
  price,
  status,
  description,
  saler,
  last_added,
  last_update,
  staff_create,
  staff_update
) => {
  try {
    const result = await db.query(
      "INSERT INTO `rawMaterial`(origin,weight,amount,price,status,description,saler,last_added,last_update,staff_create,staff_update) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )",
      [
        origin,
        weight,
        amount,
        price,
        status,
        description,
        saler,
        last_added,
        last_update,
        staff_create,
        staff_update,
      ]
    );
  } catch (error) {
      throw new Error(`Post new material error: ${error}`); 
  }
};

//ฟังก์ชันที่ไม่ต้องการพารามิเตอร์
