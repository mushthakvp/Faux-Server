const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        turf_creator_id: { type: String },
        turf_name: { type: String },
        turf_place: { type: String },
        turf_municipality: { type: String },
        turf_district: { type: String },
        turf_category:
        {
            turf_cricket: { type: Boolean },
            turf_football: { type: Boolean },
            turf_badminton: { type: Boolean },
            turf_yoga: { type: Boolean },
        }
        ,
        turf_type:
        {
            turf_sevens: { type: Boolean },
            turf_sixes: { type: Boolean },
        },
        turf_info: { 
            turf_isAvailable: { type: Boolean },
            turf_rating: { type: Number },
            turf_map : { type: String },
        },
        turf_amenities:
        {
            turf_washroom: { type: Boolean },
            turf_water: { type: Boolean },
            turf_dressing: { type: Boolean },
            turf_parking: { type: Boolean },
            turf_gallery: { type: Boolean },
            turf_cafeteria: { type: Boolean },
        }
        ,
        turf_images:
        {
            turf_images1: { type: String },
            turf_images2: { type: String },
            turf_images3: { type: String },
        }
        ,
        turf_time:
        {
            time_morning_start: { type: Number },
            time_morning_end: { type: Number },
            time_afternoon_start: { type: Number },
            time_afternoon_end: { type: Number },
            time_evening_start: { type: Number },
            time_evening_end: { type: Number },
        },
        turf_price : {
            morning_price : { type: Number },
            afternoon_price : { type: Number },
            evening_price : { type: Number },
        },
        turf_logo : { type: String },

    }
)

const model = mongoose.model("turfList", productSchema)

module.exports = model