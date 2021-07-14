const materialModels = require("../models/materialModels");
const productModels = require("../models/productModels");
const certificateModels = require("../models/certificateModels");
const quotationModels = require("../models/quotationModels");
const orderModels = require("../models/orderModels");

exports.allMaterial = async (req, res) => {
  try {
    const materialResult = await materialModels.getAllMaterial();
    const materialAPI = [];

    for (const i in materialResult) {
      let materialFormat = {
        id_material: `R000${materialResult[i].id_material}`,
        description: materialResult[i].description,
        origin: materialResult[i].origin,
        weight: materialResult[i].weight,
        seller: materialResult[i].saler,
        amount: materialResult[i].amount,
        price: materialResult[i].price,
        partner: [{
          id_partner: materialResult[i].id_partner,
          name: materialResult[i].name_partner,
          percent: materialResult[i].percent
        }],
        kcode: [
          `K000${materialResult[i].id_prod}`
        ],
        status: materialResult[i].status,
        remark: materialResult[i].remark,
        added_timestamp: materialResult[i].last_added
      }
      materialAPI.push(materialFormat)
    }
    // const partner_materialResult = await partner_materialModels.getAllPartner_Material();
    // const productResult = await productModels.getAllProduct();
    // let material = []

    // for (const i in materialResult) {
    //   let materialFormat = {
    //     no: materialResult[i].id_material,
    //     description: materialResult[i].description,
    //     origin: materialResult[i].origin,
    //     weight: materialResult[i].weight,
    //     saler: materialResult[i].saler,
    //     amount: materialResult[i].amount,
    //     price: materialResult[i].price,
    //     partner: [],
    //     k_code: [],
    //     status: materialResult[i].status,
    //     remark: [],
    //     added_timestamp: materialResult[i].last_added
    //   }
    //   for (const j in partner_materialResult) {
    //     if (partner_materialResult[j].id_material == materialResult[i].id_material) {
    //       materialFormat["partner"].push({
    //         id_material: `R000${partner_materialResult[j].id_material}`,
    //         id_partner: partner_materialResult[j].id_partner,
    //         name: partner_materialResult[j].name,
    //         percent: partner_materialResult[j].percent
    //       })
    //     }
    //   }
    //   for (const k in productResult) {
    //     if(productResult[k].id_material == materialResult[i].id_material) {
    //       materialFormat["k_code"].push(`K000${productResult[k].id_prod}`)
    //       materialFormat["remark"].push(productResult[k].remark)
    //     }
    //   }
    //   material.push(materialFormat)
    // }

    res.send(materialAPI);
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
    const materialAPI = await materialResult[materialResult.length -1];
    // Format ค่าที่รับได้รับ res มาจาก Models
    const materialFormat = await {
      id_material: `R000${materialAPI.id_material}`,
      description: materialAPI.description,
      origin: materialAPI.origin,
      weight: materialAPI.weight,
      seller: materialAPI.saler,
      amount: materialAPI.amount,
      price: materialAPI.price,
      partner: [{
        id_partner: materialAPI.id_partner,
        name: materialAPI.name_partner,
        percent: materialAPI.percent
      }],
      kcode: [
        `K000${materialAPI.id_prod}`
      ],
      status: materialAPI.status,
      remark: materialAPI.remark,
      added_timestamp: materialAPI.last_added
    }

    res.send(materialFormat);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdMaterial = async (req, res) => {
  try {
    const materialResult = await materialModels.getIdMaterial(req);
    const productResult = await productModels.getAllProduct();
    const certificateResult = await certificateModels.getAllCertificate();
    const quotationResult = await quotationModels.getAllQuotation();
    const orderResult = await orderModels.getAllOrder();
    const materialAPI = [];

    let materialFormat = {
      id_material: `R000${materialResult[0].id_material}`,
      description: materialResult[0].description,
      origin: materialResult[0].origin,
      weight: materialResult[0].weight,
      seller: materialResult[0].saler,
      amount: materialResult[0].amount,
      price: materialResult[0].price,
      partner: [{
        id_partner: materialResult[0].id_partner,
        name: materialResult[0].name_partner,
        percent: materialResult[0].percent
      }],
      kcode: [
        `K000${materialResult[0].id_prod}`
      ],
      status: materialResult[0].status,
      remark: materialResult[0].remark,
      added_timestamp: materialResult[0].last_added,
      Item_K_List: []
    }
    for (const j in productResult){
      if (materialResult[j].id_material == productResult[j].id_material) {
        materialFormat["Item_K_List"].push({           
          id_material: `K000${productResult[j].id_prod}`,
          description: productResult[j].description,
          Comment: productResult[j].comment,
          img: productResult[j].url_prod,
          parent: `R000${productResult[j].id_material}`,
          origin: productResult[j].origin,
          recut: productResult[j].id_recut,
          dimension: productResult[j].dimension,
          status: productResult[j].status,
          price: productResult[j].price,
          interest: productResult[j].interest,
          decorate: productResult[j].decorate,
          travel: productResult[j].travel,
          certificate_cost: productResult[j].certificate,
          other: productResult[j].other_cost,
          certificate: [],
          quotation: [],
          added_timestamp: productResult[j].last_added
        })
        for (const k in certificateResult) {
          if (productResult.id_prod == certificateResult.id_prod) {
              materialFormat["Item_K_List"][j]["certificate"].push({
                id_certificate: certificateResult[k].id_certificate,
                name: certificateResult[k].name_certificate,
                img: certificateResult[k].url_img,
                dimension: certificateResult[k].dimension,
                weight: certificateResult[k].weight,
                color: certificateResult[k].color,
                remark: certificateResult[k].remark,
                added_timestamp: certificateResult[k].last_added
            })
          }
        }
        for (const L in quotationResult) {
          if (productResult.id_prod == orderResult.id_prod) {
            materialFormat["Item_K_List"][j]["quotation"].push({
              id_quotation: quotationResult[L].id_quotation,
              id_customer: quotationResult[L].id_customer,
              name: quotationResult[L].name_customer,
              phone: quotationResult[L].phone,
              company: quotationResult[L].company,
              email: quotationResult[L].email,
              price: quotationResult[L].price,
              remark: quotationResult[L].remark,
              added_timestamp: quotationResult[L].last_added,
              status: quotationResult[L].status
            })
          }
        }
      }
    }
    materialAPI.push(materialFormat)
    res.send(materialAPI);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};



exports.postMaterial = async (req, res) => {
  try {
    
    
    // let unixTimestamp = Math.round(new Date().getTime() / 1000);
    const newMaterial = await materialModels.postNewMaterial(req);
    // const materialResult = await materialModels.getAllMaterial();
    // const lastMaterialResult = materialResult[materialResult.length -1];
    const formatLastMaterialResult = {
      Status: "success",
      Message: "raw-material added successful "
    };

    res.send(formatLastMaterialResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
  
};

exports.putMaterial = async (req,res) => {
  try {
    const materialResult = await materialModels.putUpdateMaterial(req);
    res.status(201).send({
      Status: "success",
      Message: "raw-material update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deleteMaterial = async (req,res) => {
  try {
    const materialResult = await materialModels.deleteIdMaterial(req);
    res.send({
      Status: "success",
      Message: "raw-material delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}

//exports ทันที ไม่ต้องสร้างฟังก์ชันแล้วค่อยมา export

//controller
//1)การจัดเรียง data ใหม่ ex.มีข้อมูลเป็น array มา เราสามารถจัดเรียงใหม่ เอาแค่ ตัวล่าสุดก็ได้
//2)สามารถเรียก model ได้โดยไม่ต้องสร้างใหม่
//3)เราสามารถเขียนเงื่อนไขได้ว่า ข้อมูลต้องเป็นแบบนี้
//4)เรียกใช้ front end ได้ด้วย ใช้ res.render คือ reder คือส่งออกมาเป็น html สามารถใส่โค้ด html ได้เลย
