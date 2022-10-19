const asyncHandler = require("express-async-handler")
const User = require("../schema/accountModel")
const bcrypt = require("bcrypt")
require("dotenv").config()
const { sendOtpEmail } = require("../otpHandler/nodemailer")
const twilio = require("../otpHandler/twilio")
const crypto = require("crypto")
const { generateToken } = require('../utils/jwt')


module.exports = {

    // signup

    emailSignup: asyncHandler(async (req, res, next) => {

        try {

            const { user_mail, user_password, } = req.body

            const match = await User.findOne({ user_mail: user_mail })

            if (match) {
                res.status(404).json({ "status": false, "message": "user already registerd" })

            } else {

                const response = await sendOtpEmail(user_mail)

                const user = User({
                    user_mail,
                    user_number: 0000000000,
                    user_password,
                    user_isVerified: false,
                    user_otp: response
                })

                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(user.user_password, salt)
                user.user_password = hashPassword

                // send a verification mail to user



                if (response != null) {
                    await user.save()
                }

                if (response == null) {
                    res.status(401).json({ "status": false, "id": "", "message": "Enter correct email" })
                } else {
                    res.status(200).json({ "status": true, "id": user._id, "message": "OTP sent" })
                }
            }

        } catch (error) {
            res.status(401).json({ "status": false, "id": `invalid 401 ${error}` })

        }

    }),


    //verify otp

    emailVerifyOtp: asyncHandler(async (req, res) => {
        const { user_otp, _id } = req.body

        await User.findById({ _id }).then(async (user) => {

            if (user_otp == user.user_otp) {

                const token = generateToken(_id, '1d')
                const refreshToken = generateToken(_id, '100d')

            const findUser = await User.findOneAndUpdate({ _id: _id }, { $set: { user_isVerified: true } })

                res.status(200).json({ "status": true, "message": "Verify Success", "token": token, "refreshToken": refreshToken , "_id" : findUser.id})
            }
        }).catch((err) => {
            res.status(401).json({ "status": false, "message": "please check otp", "token": "" })
        })

    }),


    //login

    emailLogin: asyncHandler(async (req, res) => {


        try {

            const { user_mail, user_password } = req.body

            const findUser = await User.findOne({ user_mail: user_mail })

            console.log(findUser);

            if (findUser) {

                const match = await bcrypt.compare(user_password, findUser.user_password)

                const token = generateToken(findUser.id, '1d')
                const refreshToken = generateToken(findUser.id, '100d')

                if (match) {
                    if (findUser.user_isVerified) {
                        res.status(200).json({ "status": true, "message": "Loged in succsess", "token": token, "refreshToken": refreshToken , "_id" : findUser.id })
                    } else {
                        res.status(401).json({ "status": false, "message": "User n't verified", "token": "" })
                    }
                } else {
                    res.status(401).json({ "status": false, "message": "Password Dosen't Match", "token": "" })
                }

            } else {
                res.status(401).json({ "status": false, "message": "User n't registerd", "token": "" })
            }

        } catch (error) {

            res.status(401).json({ "status": false, "message": error.message, "token": "" })

        }

    }),


    // login with number

    mobileSignup: asyncHandler(async (req, res) => {

        try {
            const { user_number } = req.body
            const result = await twilio.sendOtp(user_number)

            console.log(result);

            if (result == "verification") {

                const findUser = await User.findOne({ user_number: user_number })

                if (findUser) {
                    res.status(200).json({ "status": true, "_id": findUser._id, "message": "OTP sent" })

                } else {
                    const user = User({
                        user_mail: crypto.randomBytes(64).toString("hex"),
                        user_number,
                        user_password: crypto.randomBytes(64).toString("hex"),
                        user_isVerified: false,
                    })

                    await user.save()
                    res.status(200).json({ "status": true, "_id": user._id, "message": "OTP sent" })
                }

            } else {
                res.status(401).json({ "status": false, "_id": "", "message": "Enter Correct Number" })
            }
        } catch (error) {
            res.status(401).json({ "status": false, "_id": "", "message": error.message })
        }


    }),

    // verify mobile number

    verifyMobile: asyncHandler(async (req, res) => {
        try {
            const { user_otp, user_number, _id } = req.body
            console.log(user_otp, user_number, _id);
            const response = await twilio.verifyOtp(user_number, user_otp)

            console.log(response);
            console.log("verification progress");
            if (response === 'approved') {
                const token = generateToken(_id, '1h');
                const refreshToken = generateToken(_id, '100d')

                console.log("account verified");
                await User.findByIdAndUpdate({ _id: _id }, { $set: { user_isVerified: true } })

                res.status(200).json({ "status": true, "token": token, "refreshToken": refreshToken, "message": "Sucsess" })
            } else {
                console.log("error");
                res.status(401).json({ "status": false, "token": "", "message": "Check OTP" })
            }
        } catch (error) {
            res.status(401).json({ "status": false, "token": "", "message": error.message })
        }
    })
}