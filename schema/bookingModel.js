const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema(
    {
        book_date : {type : Date},
        isBooked : {type : Boolean},
        user_id : {type : String},
        turf_id : {type : String},
        turf_index : {type : Number},
        time_period : {type : String}
    }
)

const model = mongoose.model("bookingModel", bookingSchema)

module.exports = model