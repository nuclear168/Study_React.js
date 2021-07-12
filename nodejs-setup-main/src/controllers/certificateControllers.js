const certificateModels = require("../models/certificateModels");

exports.allCertificate = async (req, res) => {
  try {
    const certificateResult = await certificateModels.getAllCertificate();
    const cerAPI = [];

    for (const i in certificateResult) {
      let certificateFormat = {
        id_certificate: certificateResult[i].id_certificate,
        name: certificateResult[i].name_certificate,
        img: certificateResult[i].url_img,
        dimension: certificateResult[i].dimension,
        weight: certificateResult[i].weight,
        color: certificateResult[i].color,
        remark: certificateResult[i].remark,
        added_timestamp: certificateResult[i].last_added
      }
      cerAPI.push(certificateFormat)
    }

    res.send(cerAPI);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdCertificate = async (req, res) => {
  try {
    const certificateResult = await certificateModels.getIdCertificate(req);
    const cerAPI = [];

    for (const i in certificateResult) {
      let certificateFormat = {
        id_certificate: certificateResult[i].id_certificate,
        name: certificateResult[i].name_certificate,
        img: certificateResult[i].url_img,
        dimension: certificateResult[i].dimension,
        weight: certificateResult[i].weight,
        color: certificateResult[i].color,
        remark: certificateResult[i].remark,
        added_timestamp: certificateResult[i].last_added
      }
      materialAPI.push(certificateFormat)
    }

    res.send(cerAPI);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getLastCertificateId = async (req, res) => {
    try {
      const certificateResult = await certificateModels.getAllCertificate();
      const lastCertificateResult = certificateResult[certificateResult.length - 1];
      const certificateFormat = {
        id_certificate: lastCertificateResult.id_certificate,
        name: lastCertificateResult.name_certificate,
        img: lastCertificateResult.url_img,
        dimension: lastCertificateResult.dimension,
        weight: lastCertificateResult.weight,
        color: lastCertificateResult.color,
        remark: lastCertificateResult.remark,
        added_timestamp: lastCertificateResult.last_added
      }
      
      res.send(certificateFormat);
    } catch (error) {
      res.status(400).send({
        status: "error",
        message: `${error}`,
      });
    }
};

exports.postCertificate = async (req, res) => {
  try {
    const newCertificateMaterial = await certificateModels.postNewCertificate(req);
    const certificateResult = {
      Status: "success",
      Message: "Certificate added successful "
    };

    res.send(certificateResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
  
};

exports.putCertificate = async (req,res) => {
  try {
    const certificateResult = await certificateModels.putUpdateCertificate(req);
    res.status(201).send({
      Status: "success",
      Message: "Certificate update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deleteCertificate = async (req,res) => {
  try {
    const certificateResult = await certificateModels.deleteIdCertificate(req);
    res.send({
      Status: "success",
      Message: "Certificate delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}