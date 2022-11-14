const asyncHandler = require("express-async-handler");
const Wishlist = require("../schema/wishlistModel");

module.exports = {
  addWhishList: asyncHandler(async (req, res) => {
    try {
      const dbObj = req.body;
      console.log(dbObj);
      console.log(dbObj.turf_user_id);
      const wishlist = Wishlist({
        turf_user_id: dbObj.turf_user_id,
        turf_logo: dbObj.data[0].turf_logo,
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
          time_morning_start: dbObj.data[0].turf_time.time_morning_start,
          time_morning_end: dbObj.data[0].turf_time.time_morning_end,
          time_afternoon_start: dbObj.data[0].turf_time.time_afternoon_start,
          time_afternoon_end: dbObj.data[0].turf_time.time_afternoon_end,
          time_evening_start: dbObj.data[0].turf_time.time_evening_start,
          time_evening_end: dbObj.data[0].turf_time.time_evening_end,
        },
        turf_price: {
          morning_price: dbObj.data[0].turf_price.morning_price,
          afternoon_price: dbObj.data[0].turf_price.afternoon_price,
          evening_price: dbObj.data[0].turf_price.evening_price,
        },
      });
      let i = 0;
      let flag = 0;
      const findUSer = await Wishlist.findOne({turf_user_id: dbObj.data[0].turf_user_id});
      if (findUSer) {
        for(i = 0; i < findUSer.length; i++){
          if(findUSer[i].turf_name == dbObj.data[0].turf_name){
            flag = 1;
            break;
          }
        }
        if(flag == 1){
          res.status(200).json({message: "Wishlist Added"});
        }else{
          await wishlist.save();
          res.status(200).json({message: "wishlist already added"});
        }
      }else{
        await wishlist.save();
        res.status(200).json({ message: "Wishlist Added" });
      }
    } catch (error) {
      res.status(401).json({ status: false, message: error });
    }
  }),

  getWhishList: asyncHandler(async (req, res, next) => {
    const finalArray = [];
    const finalObject = {};
    const turf_user_id = req.params.id;
    try {
      const findWhishList = await Wishlist.find({
        turf_user_id: turf_user_id,
      });
    
      for(let i in findWhishList){
        let objName = findWhishList[i]["turf_name"];
        finalObject[objName] = findWhishList[i];
      }

      for(let i in finalObject){
        finalArray.push(finalObject[i]);
      }
      

      res
        .status(200)
        .json({
          status: true,
          length: finalArray.length,
          data: finalArray,
        });
    } catch (error) {
      res
        .status(401)
        .json({ status: false, length: 0, data: `error ${error}` });
    }
  }),
  deleteWishlist: asyncHandler(async (req, res, next) => {
    try {
      const id = req.params.id;
      const deleteWishlist = await Wishlist.findByIdAndDelete(id);
      res.status(200).json({ "status": true, "message": "Wishlist deleted" });
    } catch (error) {
      res.status(401).json({ "status": false, "message": error});
    }
  }),
};