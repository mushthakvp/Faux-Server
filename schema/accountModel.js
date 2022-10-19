const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        user_mail: { type: String },
        user_number: { type: Number },
        user_password: { type: String },
        user_isVerified: { type: Boolean },
        user_date: { type: Date, default: Date.now() },
        user_otp : {type : Number}
    }
)

const model = mongoose.model("userList", userSchema)

module.exports = model