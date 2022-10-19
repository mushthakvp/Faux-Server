const asyncHandler = require("express-async-handler");
const Wishlist = require("../schema/wishlistModel");

module.exports = {
  addWhishList: asyncHandler(async (req, res) => {
    try {
      const dbObj = req.body;

      const findProduct = await Wishlist.findOne({
        turf_name: dbObj.data[0].turf_name,
      });

      if (findProduct) {
        res.status(401).json({ message: "Product already added to wishlist"});
      } else {
        const wishlist = Wishlist({
          turf_user_id: dbObj.turf_user_id,
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
            time_morning: dbObj.data[0].turf_time.time_morning,
            time_afternoon: dbObj.data[0].turf_time.time_afternoon,
            time_evening: dbObj.data[0].turf_time.time_evening,
          },
        });

        await wishlist.save();

        res.status(200).json({ status: true });
      }
    } catch (error) {
      res.status(401).json({ status: false, message: error });
    }
  }),

  getWhishList: asyncHandler(async (req, res, next) => {
    const turf_user_id = req.params.id;
    try {
      const findWhishList = await Wishlist.find({
        turf_user_id: turf_user_id,
      });

      res
        .status(200)
        .json({
          status: true,
          length: findWhishList.length,
          data: findWhishList,
        });
    } catch (error) {
      res
        .status(401)
        .json({ status: false, length: 0, data: `error ${error}` });
    }
  }),
};
