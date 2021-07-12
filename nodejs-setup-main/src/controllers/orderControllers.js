const orderModels = require("../models/orderModels");

exports.allOrder = async (req, res) => {
  try {
    const orderResult = await orderModels.getAllOrder();
    res.send(orderResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdProduct = async (req, res) => {
  try {
    const productResult = await orderModels.getIdProduct(req);
    res.send(productResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdQuotation = async (req, res) => {
  try {
    const quotationResult = await orderModels.getIdQuotation(req);
    res.send(quotationResult);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.postOrder = async (req, res) => {
  try {
    const newOrder = await orderModels.postNewOrder(req);
    const orderResult = {
      Status: "success",
      Message: "Order added successful "
    };

    res.send(orderResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.putOrder = async (req,res) => {
  try {
    const orderResult = await orderModels.putUpdateOrder(req);
    res.status(201).send({
      Status: "success",
      Message: "Order update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deleteOrder = async (req,res) => {
  try {
    const orderResult = await orderModels.deleteIdOrder(req);
    res.send({
      Status: "success",
      Message: "Order delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}