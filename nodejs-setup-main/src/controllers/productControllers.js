const productModels = require("../models/productModels");

exports.allProduct = async (req, res) => {
  try {
    const productResult = await productModels.getAllProduct();
    const productAPI = [];

    for (const i in productResult) {
      let productFormat = {
        id_product: `K000${productResult[i].id_prod}`,
        process: productResult[i].process,
        description: productResult[i].description,
        code: productResult[i].code,
        comment: productResult[i].comment,
        img: [productResult[i].url_img],
        parent: `R000${productResult[i].id_material}`,
        origin: productResult[i].origin,
        recut: productResult[i].id_recut,
        weight: productResult[i].weight,
        status: productResult[i].status,
        dimension: productResult[i].dimension,
        price: productResult[i].price,
        cost: {
          interest: productResult[i].interest,
          decorate: productResult[i].decorate,
          travel: productResult[i].travel,
          certificate: productResult[i].certificate,
          other: productResult[i].other_cost
        },
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
        id_product: `K000${productResult[i].id_prod}`,
        process: productResult[i].process,
        description: productResult[i].description,
        code: productResult[i].code,
        comment: productResult[i].comment,
        img: [productResult[i].url_img],
        parent: `R000${productResult[i].id_material}`,
        origin: productResult[i].origin,
        recut: productResult[i].id_recut,
        weight: productResult[i].weight,
        status: productResult[i].status,
        dimension: productResult[i].dimension,
        price: productResult[i].price,
        cost: {
          interest: productResult[i].interest,
          decorate: productResult[i].decorate,
          travel: productResult[i].travel,
          certificate: productResult[i].certificate,
          other: productResult[i].other_cost
        },
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
        id_product: `K000${lastProductResult.id_prod}`,
        process: lastProductResult.process,
        description: lastProductResult.description,
        code: lastProductResult.code,
        comment: lastProductResult.comment,
        img: [lastProductResult.url_img],
        parent: `R000${lastProductResult.id_material}`,
        origin: lastProductResult.origin,
        recut: lastProductResult.id_recut,
        weight: lastProductResult.weight,
        status: lastProductResult.status,
        dimension: lastProductResult.dimension,
        price: lastProductResult.price,
        cost: {
          interest: lastProductResult.interest,
          decorate: lastProductResult.decorate,
          travel: lastProductResult.travel,
          certificate: lastProductResult.certificate,
          other: lastProductResult.other_cost
        },
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