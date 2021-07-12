const img_cerModels = require("../models/img_cerModels");

exports.allImg_cer = async (req, res) => {
  try {
    const img_cerResult = await img_cerModels.getAllImg_cer();
    res.send(img_cerResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdImg_cer = async (req, res) => {
  try {
    const img_cerResult = await img_cerModels.getImg_cerFormId_cer(req);
    res.send(img_cerResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.postImg_cer = async (req, res) => {
  try {
    const newImg_cerMaterial = await img_cerModels.postNewImg_cer(req);
    const img_cerResult = {
      Status: "success",
      Message: "Img_cer added successful "
    };

    res.send(img_cerResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
  
};

exports.putImg_cer = async (req,res) => {
  try {
    const img_cerResult = await img_cerModels.putUpdateImg_cer(req);
    res.status(201).send({
      Status: "success",
      Message: "Img_cer update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deleteImg_cer = async (req,res) => {
  try {
    const img_cerResult = await img_cerModels.deleteIdImg_cer(req);
    res.send({
      Status: "success",
      Message: "Img_cer delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}