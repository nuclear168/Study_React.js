const productModels = require("../models/productModels");

exports.allProduct = async (req, res) => {
  try {
    const productResult = await productModels.getAllProduct();
    const productAPI = [];

    for (const i in productResult) {
      let productFormat = {
        id_material: `K000${productResult[i].id_prod}`,
        description: productResult[i].description,
        Comment: productResult[i].comment,
        img: productResult[i].url_prod,
        parent: `R000${productResult[i].id_material}`,
        origin: productResult[i].origin,
        recut: productResult[i].id_recut,
        dimension: productResult[i].dimension,
        status: productResult[j].status,
        price: productResult[i].price,
        interest: productResult[i].interest,
        decorate: productResult[i].decorate,
        travel: productResult[i].travel,
        certificate: productResult[i].certificate,
        other: productResult[i].other_cost,
        added_timestamp: productResult[i].last_added
      }
      productAPI.push(productFormat)
    }

    res.send(productAPI);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getIdProduct = async (req, res) => {
  try {
    const productResult = await productModels.getIdProduct(req);
    const productAPI = [];

    for (const i in productResult) {
      let productFormat = {
        id_material: `K000${productResult[i].id_prod}`,
        description: productResult[i].description,
        Comment: productResult[i].comment,
        img: productResult[i].url_prod,
        parent: `R000${productResult[i].id_material}`,
        origin: productResult[i].origin,
        recut: productResult[i].id_recut,
        dimension: productResult[i].dimension,
        price: productResult[i].price,
        interest: productResult[i].interest,
        decorate: productResult[i].decorate,
        travel: productResult[i].travel,
        certificate: productResult[i].certificate,
        other: productResult[i].other_cost,
        added_timestamp: productResult[i].last_added
      }
      productAPI.push(productFormat)
    }

    res.send(productAPI);
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
};

exports.getLastProductId = async (req, res) => {
    try {
      const productResult = await productModels.getAllProduct();
      const lastProductResult = productResult[productResult.length -1];
      const productFormat = {
        id_material: `K000${lastProductResult.id_prod}`,
        description: lastProductResult.description,
        Comment: lastProductResult.comment,
        img: lastProductResult.url_prod,
        parent: `R000${lastProductResult.id_material}`,
        origin: lastProductResult.origin,
        recut: lastProductResult.id_recut,
        dimension: lastProductResult.dimension,
        price: lastProductResult.price,
        interest: lastProductResult.interest,
        decorate: lastProductResult.decorate,
        travel: lastProductResult.travel,
        certificate: lastProductResult.certificate,
        other: lastProductResult.other_cost,
        added_timestamp: lastProductResult.last_added
      }

      res.send(productFormat);
    } catch (error) {
      res.status(400).send({
        status: "error",
        message: `${error}`,
      });
    }
  };

exports.postProduct = async (req, res) => {
  try {
    const newProduct = await productModels.postNewProduct(req);
    const productResult = {
      Status: "success",
      Message: "Product added successful "
    };

    res.send(productResult);
  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.putProduct = async (req,res) => {
  try {
    const productResult = await productModels.putUpdateProduct(req);
    res.status(201).send({
      Status: "success",
      Message: "Product update successful",
    });

  } catch (error) {
    res.status(500).send({
        status: "error",
        message: `${error}`,
      });
  }
};

exports.deleteProduct = async (req,res) => {
  try {
    const productResult = await productModels.deleteIdProduct(req);
    res.send({
      Status: "success",
      Message: "Product delete successful"
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: `${error}`,
    });
  }
}