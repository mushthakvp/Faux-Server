const Product = require("../schema/bookingModel")
const asyncHandler = require("express-async-handler")


module.exports = {
    addDetails : asyncHandler(async (req,res) => {
        console.log(req.body);
        res.status(200).json({status : true})
    })
}