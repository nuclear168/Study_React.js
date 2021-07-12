const PartnerModels = require("../models/partnerModels");

exports.allPartner = async (req, res) => {
  try {
    const partnerResult = await PartnerModels.getAllPartner();
    let partner = [];

    for (const i in partnerResult) {
      let partnerFormat = {
        id_partner: partnerResult[i].id_partner,
        name: partnerResult[i].name_partner,
        phone: partnerResult[i].phone,
        email: partnerResult[i].email,
        remark: partnerResult[i].remark,
        added_timestamp: partnerResult[i].last_added 
      }
      partner.push(partnerFormat)
    }

    res.send(partner);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdPartner = async (req, res) => {
  try {
    const partnerResult = await PartnerModels.getIdPartner(req);
    let partner = [];

    for (const i in partnerResult) {
      let partnerFormat = {
        id_partner: partnerResult[i].id_partner,
        name: partnerResult[i].name_partner,
        phone: partnerResult[i].phone,
        email: partnerResult[i].email,
        remark: partnerResult[i].remark,
        added_timestamp: partnerResult[i].last_added 
      }
      partner.push(partnerFormat)
    }

    res.send(partner);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getLastPartnerId = async (req, res) => {
    try {
      const partnerResult = await PartnerModels.getAllPartner();
      const lastPartnerResult = partnerResult[partnerResult.length -1];
      const partnerFormat = {
        id_partner: lastPartnerResult.id_partner,
        name: lastPartnerResult.name_partner,
        phone: lastPartnerResult.phone,
        email: lastPartnerResult.email,
        remark: lastPartnerResult.remark,
        added_timestamp: lastPartnerResult.last_added 
      }
  
      res.send(partnerFormat);
    } catch (error) {
      res.status(400).send({
        status: "error",
        message: `${error}`,
      });
    }
  };

exports.postPartner = async (req, res) => {
  try {
    const newPartnerMaterial = await PartnerModels.postNewPartner(req);
    const PartnerResult = {
      Status: "success",
      Message: "Partner added successful "
    };

    res.send(PartnerResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
  
};

exports.putPartner = async (req,res) => {
  try {
    const PartnerResult = await PartnerModels.putUpdatePartner(req);
    res.status(201).send({
      Status: "success",
      Message: "Partner update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deletePartner = async (req,res) => {
  try {
    const PartnerResult = await PartnerModels.deleteIdPartner(req);
    res.send({
      Status: "success",
      Message: "Partner delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}