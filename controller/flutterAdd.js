const asyncHandler = require("express-async-handler");
const Product = require("../schema/productModel");

module.exports = {
  addProduct: asyncHandler(async (req, res) => {
    try {
      const dbObj = req.body;

      const product = Product({
        turf_creator_id: dbObj.data[0].turf_creator_id,
        turf_name: dbObj.data[0].turf_name,
        turf_place: dbObj.data[0].turf_place,
        turf_municipality: dbObj.data[0].turf_municipality,
        turf_district: dbObj.data[0].turf_district,
        turf_category: {
          turf_cricket: dbObj.data[0].turf_category.turf_cricket,
          turf_football: dbObj.data[0].turf_category.turf_football,
          turf_badminton: dbObj.data[0].turf_category.turf_badminton,
          turf_yoga: dbObj.data[0].turf_category.turf_yoga,
        },
        turf_type: {
          turf_sevens: dbObj.data[0].turf_type.turf_sevens,
          turf_sixes: dbObj.data[0].turf_type.turf_sixes,
        },
        turf_info: {
          turf_isAvailable: dbObj.data[0].turf_info.turf_isAvailable,
          turf_rating: dbObj.data[0].turf_info.turf_rating,
          turf_map: dbObj.data[0].turf_info.turf_map,
        },
        turf_amenities: {
          turf_washroom: dbObj.data[0].turf_amenities.turf_washroom,
          turf_water: dbObj.data[0].turf_amenities.turf_water,
          turf_dressing: dbObj.data[0].turf_amenities.turf_dressing,
          turf_parking: dbObj.data[0].turf_amenities.turf_parking,
          turf_gallery: dbObj.data[0].turf_amenities.turf_gallery,
          turf_cafeteria: dbObj.data[0].turf_amenities.turf_cafeteria,
        },
        turf_images: {
          turf_images1: dbObj.data[0].turf_images.turf_images1,
          turf_images2: dbObj.data[0].turf_images.turf_images2,
          turf_images3: dbObj.data[0].turf_images.turf_images3,
        },
        turf_time: {
          time_morning_start : dbObj.data[0].turf_time.time_morning_start,
          time_morning_end : dbObj.data[0].turf_time.time_morning_end,
          time_afternoon_start : dbObj.data[0].turf_time.time_afternoon_start,
          time_afternoon_end : dbObj.data[0].turf_time.time_afternoon_end,
          time_evening_start : dbObj.data[0].turf_time.time_evening_start,
          time_evening_end : dbObj.data[0].turf_time.time_evening_end,
        },
        turf_price : {
          morning_price : dbObj.data[0].turf_price.morning_price,
          afternoon_price : dbObj.data[0].turf_price.afternoon_price,
          evening_price : dbObj.data[0].turf_price.evening_price,
        },
        turf_logo : dbObj.data[0].turf_logo,
      });

      await product.save();

      res.status(200).json({ status: true });
    } catch (error) {
      res.status(401).json({ status: false, message: error });
    }
  }),
};
