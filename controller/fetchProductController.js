const asyncHandler = require("express-async-handler");
const Product = require("../schema/productModel");

module.exports = {
  getAllProducts: asyncHandler(async (req, res, next) => {
    console.log(req.user);
    Product.find((err, data) => {
      if (!err) {
        res.status(200).json({ status: true, data: data , length : data.length});
      } else {
        res.status(400).json({ status: false, message: err });
      }
    });
  }),

  getNearbyProducts: asyncHandler(async (req, res, next) => {
    const turf_district = req.params.place;

    try {
      const findData = await Product.find({
        turf_district: turf_district,
      }).select("-__v");

      res
        .status(200)
        .json({ status: true, "length": findData.length, data: findData });
    } catch (error) {
      res.status(401).json({ status: false, message: `invalid 401 ${error}` });
    }
  }),

  searchProducts: asyncHandler(async (req, res, next) => {
    const turf_name = req.params.name;
    console.log(turf_name);
    try {
      const result = await Product.find({ $text: { $search: turf_name } });
      res.status(200).json({ status: true, data: result });
    } catch (error) {
      res.status(401).json({ status: false, message: `invalid 401 ${error}` });
    }
  }),
};
