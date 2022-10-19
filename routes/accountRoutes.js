const express = require('express')
const router = express.Router()
const accountController = require("../controller/accountController")
const refreshController = require("../controller/refreshController")
const bookingController = require("../controller/bookingController")

router.post("/signup-email", accountController.emailSignup)

router.post("/login-email", accountController.emailLogin)

router.post("/verify-email-otp", accountController.emailVerifyOtp)

router.post("/verify-number-otp", accountController.verifyMobile)

router.post("/loginwith-number", accountController.mobileSignup)

router.post("/refresh-token" , refreshController.refreshAccessToken)

router.post("/add-booking" , bookingController.addDetails)

router.post("/add-booking" , bookingController.addDetails)

module.exports = router