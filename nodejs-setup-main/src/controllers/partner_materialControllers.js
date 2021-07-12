const Partner_MaterialModels = require("../models/partner_materialModels");

exports.allPartner_Material = async (req, res) => {
  try {
    const Partner_MaterialResult = await Partner_MaterialModels.getAllPartner_Material();
    res.send(Partner_MaterialResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdMaterial = async (req, res) => {
  try {
    const Partner_MaterialResult = await Partner_MaterialModels.getIdMaterial(req);
    res.send(Partner_MaterialResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdPartner = async (req, res) => {
  try {
    const Partner_MaterialResult = await Partner_MaterialModels.getIdPartner(req);
    res.send(Partner_MaterialResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};



exports.postPartner_Material = async (req, res) => {
  try {
    
    
    // let unixTimestamp = Math.round(new Date().getTime() / 1000);
    const newPartner_MaterialMaterial = await Partner_MaterialModels.postNewPartner_Material(req);
    // const materialResult = await materialModels.getAllMaterial();
    // const lastMaterialResult = materialResult[materialResult.length -1];
    const Partner_MaterialResult = {
      Status: "success",
      Message: "Partner_Material added successful "
    };

    res.send(Partner_MaterialResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
  
};

exports.putPartner_Material = async (req,res) => {
  try {
    const Partner_MaterialResult = await Partner_MaterialModels.putUpdatePartner_Material(req);
    res.status(201).send({
      Status: "success",
      Message: "Partner_Material update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deletePartner_Material = async (req,res) => {
  try {
    const Partner_MaterialResult = await Partner_MaterialModels.deleteIdPartner_Material(req);
    res.send({
      Status: "success",
      Message: "Partner_Material delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}