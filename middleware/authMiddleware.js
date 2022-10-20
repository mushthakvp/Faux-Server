const { verifyToken, generateToken } = require('../utils/jwt')
const asyncHandler = require('express-async-handler');
const User = require('../schema/accountModel');

//====================== PROTECT MIDDLE WERE =========================


const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            //===================== TOKEN FROM HEADER ======================

            token = req.headers.authorization.split(" ")[1];

            //===================== VERIFY TOKEN ==========================

            const decoded = verifyToken(token)

            //=============== USER FROM THE TOKEN ======================
            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            if (error.message == "jwt expired") {

                res.status(403).json({ "status": false, "message": "Token expired" });

            } else {

                res.status(403).json({ "status": false, "message": "Invalid token" });
            }
        }
    }
    if (!token) {
        res.status(401).json({ "status": false, "message": "Token not found" });

    }
})

module.exports = { protect }