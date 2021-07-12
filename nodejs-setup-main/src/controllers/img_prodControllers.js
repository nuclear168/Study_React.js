const img_prodModels = require("../models/img_prodModels");

exports.allImg_prod = async (req, res) => {
  try {
    const img_prodResult = await img_prodModels.getAllImg_prod();
    res.send(img_prodResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdImg_prod = async (req, res) => {
  try {
    const img_prodResult = await img_prodModels.getIdImg_prod(req);
    res.send(img_prodResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.postImg_prod = async (req, res) => {
  try {
    const newImg_prodMaterial = await img_prodModels.postNewImg_prod(req);
    const img_prodResult = {
      Status: "success",
      Message: "Img_prod added successful "
    };

    res.send(img_prodResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
  
};

exports.putImg_prod = async (req,res) => {
  try {
    const img_prodResult = await img_prodModels.putUpdateImg_prod(req);
    res.status(201).send({
      Status: "success",
      Message: "Img_prod update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deleteImg_prod = async (req,res) => {
  try {
    const img_prodResult = await img_prodModels.deleteIdImg_prod(req);
    res.send({
      Status: "success",
      Message: "Img_prod delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}