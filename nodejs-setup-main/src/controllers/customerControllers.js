const customerModels = require("../models/customerModels");

exports.allCustomer = async (req, res) => {
  try {
    const customerResult = await customerModels.getAllCustomer();
    let customer = [];

    for (const i in customerResult) {
      let customerFormat = {
        id_customer: customerResult[i].id_customer,
        name: customerResult[i].name_customer,
        phone: customerResult[i].phone,
        company: customerResult[i].name_company,
        email: customerResult[i].email,
        added_timestamp: customerResult[i].last_added 
      }
      customer.push(customerFormat)
    }

    res.send(customer);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdCustomer = async (req, res) => {
  try {
    const customerResult = await customerModels.getIdCustomer(req);
    res.send(customerResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getNameCompany = async (req, res) => {
  try {
    const companyResult = await customerModels.getNameCompany(req);
    res.send(companyResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.postCustomer = async (req, res) => {
  try {
    const newCustomerMaterial = await customerModels.postNewCustomer(req);
    const customerResult = {
      Status: "success",
      Message: "Customer added successful "
    };

    res.send(customerResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
  
};

exports.putCustomer = async (req,res) => {
  try {
    const customerResult = await customerModels.putUpdateCustomer(req);
    res.status(201).send({
      Status: "success",
      Message: "Customer update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deleteCustomer = async (req,res) => {
  try {
    const customerResult = await customerModels.deleteIdCustomer(req);
    res.send({
      Status: "success",
      Message: "Customer delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}