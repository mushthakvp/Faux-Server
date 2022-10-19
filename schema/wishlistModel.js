const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema(
    {
        turf_user_id: { type: String },
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
            time_morning: { type: String },
            time_afternoon: { type: String },
            time_evening: { type: String },
        }

    }
)

const model = mongoose.model("wishlist", wishlistSchema)

module.exports = model