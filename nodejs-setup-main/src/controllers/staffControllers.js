const staffModels = require("../models/staffModels");

exports.allStaff = async (req, res) => {
  try {
    const staffResult = await staffModels.getAllStaff();
    res.send(staffResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdStaff = async (req, res) => {
  try {
    const staffResult = await staffModels.getIdStaff(req);
    res.send(staffResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.postStaff = async (req, res) => {
  try {
      console.log(req.body)
    // let unixTimestamp = Math.round(new Date().getTime() / 1000);
    const newStaff = await staffModels.postNewStaff(req);
    // const staffResult = await staffModels.getAllStaff();
    // const lastStaffResult = staffResult[staffResult.length -1];
    const formatLastStaffResult = {
      Status: "success",
      Message: "staff added successful "
    };

    res.send(formatLastStaffResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
  
};

exports.putStaff = async (req,res) => {
  try {
    const staffResult = await staffModels.putUpdateStaff(req);
    res.status(201).send({
      Status: "success",
      Message: "staff update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deleteStaff = async (req,res) => {
  try {
    const staffResult = await staffModels.deleteIdStaff(req);
    res.send({
      Status: "success",
      Message: "staff delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}