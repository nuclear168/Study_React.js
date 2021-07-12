const quotationModels = require("../models/quotationModels");

exports.allQuotation = async (req, res) => {
  try {
    const quotationResult = await quotationModels.getAllQuotation();
    const quotationAPI = [];

    for (const i in quotationResult) {
      let quotationFormat = {
        id_quotation: quotationResult[i].id_quotation,
        id_customer: quotationResult[i].id_customer,
        name: quotationResult[i].name_customer,
        phone: quotationResult[i].phone,
        company: quotationResult[i].company,
        email: quotationResult[i].email,
        price: quotationResult[i].price,
        remark: quotationResult[i].remark,
        added_timestamp: quotationResult[i].last_added,
        status: quotationResult[i].status
      }
      quotationAPI.push(quotationFormat)
    }
    res.send(quotationAPI);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdQuotation = async (req, res) => {
  try {
    const quotationResult = await quotationModels.getIdQuotation(req);
    const quotationAPI = [];

    for (const i in quotationResult) {
      let quotationFormat = {
        id_quotation: quotationResult[i].id_quotation,
        id_customer: quotationResult[i].id_customer,
        name: quotationResult[i].name_customer,
        phone: quotationResult[i].phone,
        company: quotationResult[i].company,
        email: quotationResult[i].email,
        price: quotationResult[i].price,
        remark: quotationResult[i].remark,
        added_timestamp: quotationResult[i].last_added,
        status: quotationResult[i].status
      }
      quotationAPI.push(quotationFormat)
    }
    res.send(quotationAPI);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdCustomer = async (req, res) => {
  try {
    const quotationResult = await quotationModels.getIdCustomer(req);
    const quotationAPI = [];

    for (const i in quotationResult) {
      let quotationFormat = {
        id_quotation: quotationResult[i].id_quotation,
        id_customer: quotationResult[i].id_customer,
        name: quotationResult[i].name_customer,
        phone: quotationResult[i].phone,
        company: quotationResult[i].company,
        email: quotationResult[i].email,
        price: quotationResult[i].price,
        remark: quotationResult[i].remark,
        added_timestamp: quotationResult[i].last_added,
        status: quotationResult[i].status
      }
      quotationAPI.push(quotationFormat)
    }
    res.send(quotationAPI);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.postQuotation = async (req, res) => {
  try {
    const newQuotation = await quotationModels.postNewQuotation(req);
    const quotationResult = {
      Status: "success",
      Message: "quotation added successful "
    };

    res.send(quotationResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.putQuotation = async (req,res) => {
  try {
    const quotationResult = await quotationModels.putUpdateQuotation(req);
    res.status(201).send({
      Status: "success",
      Message: "quotation update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deleteQuotation = async (req,res) => {
  try {
    const quotationResult = await quotationModels.deleteIdQuotation(req);
    res.send({
      Status: "success",
      Message: "quotation delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}