const express = require('express')
const router = express.Router()
const fetchController = require("../controller/fetchProductController")
const vendorController = require("../controller/vendorController")
const whishlistController = require("../controller/whishlistController")
const {protect}=require('../middleware/authMiddleware')

router.get("/all-turf", protect , fetchController.getAllProducts)

router.get("/vendor-turf/:id", vendorController.vendorTurf)

router.post("/add-whishlist" , whishlistController.addWhishList)

router.get("/get-whishlist/:id" , whishlistController.getWhishList)

router.get("/search-turf/:name" , fetchController.searchProducts)

router.get("/nearest-turf/:place" , protect , fetchController.getNearbyProducts) 

module.exports = router 