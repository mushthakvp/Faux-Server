const express = require('express')
const router = express.Router()
const fetchController = require("../controller/fetchProductController")
const vendorController = require("../controller/vendorController")
const wishlistController = require("../controller/wishlistController")
const {protect}=require('../middleware/authMiddleware')

router.get("/all-turf", protect , fetchController.getAllProducts)

router.get("/vendor-turf/:id", vendorController.vendorTurf)

router.post("/add-wishlist" , wishlistController.addWhishList)

router.get("/get-wishlist/:id" , wishlistController.getWhishList)

router.get("/search-turf/:name" , fetchController.searchProducts)

router.get("/nearest-turf/:place" , protect , fetchController.getNearbyProducts) 

module.exports = router 