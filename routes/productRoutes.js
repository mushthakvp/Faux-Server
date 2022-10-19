const express = require('express')
const router = express.Router()
const productController = require("../controller/addProductController")
const { upload } = require("../uploads/multer")
const flutter = require("../controller/flutterAdd")


router.post("/addturf", upload.fields([
    { name: "turf_images1", maxCount: 1 },
    { name: "turf_images2", maxCount: 1 },
    { name: "turf_images3", maxCount: 1 }
]), productController.addProduct)

router.patch("/updateturf/:id", productController.updateProduct)

router.post("/add-product" , flutter.addProduct)

module.exports = router   