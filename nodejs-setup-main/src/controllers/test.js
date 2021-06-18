const Test = require("../models/test");

exports.getAllTest = async (req, res, next) => {
  try {
    const [allTest] = await Test.getAll();
    res.status(200).json(allTest);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
