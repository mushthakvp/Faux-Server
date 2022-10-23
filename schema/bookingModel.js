const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema(
    {
        booking_date : {type : String},
        turf_id : {type : String},
        time_slot : {type : Array}
    }
)

const model = mongoose.model("bookingModel", bookingSchema)

module.exports = model