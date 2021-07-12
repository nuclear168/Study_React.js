const logModels = require("../models/logModels");

exports.allLog = async (req, res) => {
  try {
    const logResult = await logModels.getAllLog();
    res.send(logResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdLogStaff = async (req, res) => {
  try {
    const logResult = await logModels.getIdLogStaff(req);
    res.send(logResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.postLog = async (req, res) => {
  try {
    const newLogMaterial = await logModels.postNewLog(req);
    const logResult = {
      Status: "success",
      Message: "Log added successful "
    };

    res.send(logResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
  
};

exports.putLog = async (req,res) => {
  try {
    const logResult = await logModels.putUpdateLog(req);
    res.status(201).send({
      Status: "success",
      Message: "Log update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deleteLog = async (req,res) => {
  try {
    const logResult = await logModels.deleteIdLog(req);
    res.send({
      Status: "success",
      Message: "Log delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}