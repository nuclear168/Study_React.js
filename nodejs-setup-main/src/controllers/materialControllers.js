const materialModels = require("../models/materialModels");

exports.allMaterial = async (req, res) => {
  try {
    const materialResult = await materialModels.getAllMaterial();
    res.send(materialResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getLastMaterialId = async (req, res) => {
  try {
    const materialResult = await materialModels.getAllMaterial();
    const lastMaterialResult = materialResult[materialResult.length - 1];
    const formatLastMaterialResult = {
      id_material: lastMaterialResult.id_material, //สามารถเปลี่ยนชื่อได้ ...:
      status: lastMaterialResult.status,
      price: lastMaterialResult.price,
    };

    res.send(formatLastMaterialResult);
    // console.log(lastMaterialResult)
    // res.send(lastMaterialResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.postMaterial = async (req, res) => {
  try {
    let unixTimestamp = Math.round(new Date().getTime() / 1000);
    const newMaterial = await materialModels.postNewMaterial(
      req.body.origin,
      req.body.weight,
      req.body.amount,
      req.body.price,
      req.body.status,
      req.body.description,
      req.body.saler,
      unixTimestamp, //อย่าลื่มเปลี่ยน
      unixTimestamp, //อย่าลื่มเปลี่ยน
      req.body.staff_create, //อย่าลื่มเปลี่ยน
      req.body.staff_update //อย่าลื่มเปลี่ยน
    );

    const getIdMaterial = await getLastMaterialId();
    console.log(getIdMaterial);

    res.status(201).send({
      Status: "success",
      Message: "raw-material added successful ",
      Id: 1,
    });
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

//exports ทันที ไม่ต้องสร้างฟังก์ชันแล้วค่อยมา export

//controller
//1)การจัดเรียง data ใหม่ ex.มีข้อมูลเป็น array มา เราสามารถจัดเรียงใหม่ เอาแค่ ตัวล่าสุดก็ได้
//2)สามารถเรียก model ได้โดยไม่ต้องสร้างใหม่
//3)เราสามารถเขียนเงื่อนไขได้ว่า ข้อมูลต้องเป็นแบบนี้
//4)เรียกใช้ front end ได้ด้วย ใช้ res.render คือ reder คือส่งออกมาเป็น html สามารถใส่โค้ด html ได้เลย
