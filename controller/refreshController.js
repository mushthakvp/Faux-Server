const asyncHandler = require("express-async-handler")
const User = require("../schema/accountModel")
const { generateToken, verifyToken } = require('../utils/jwt')

module.exports = {
    refreshAccessToken: asyncHandler(async (req, res) => {
        const obj = req.body
        let token;
        if (obj.refreshToken) {
            try {
                //Get token from header
                token = obj.refreshToken;

                //Verify token
                const decoded = verifyToken(token);

                //Get user from the token
                let user = await User.findById(decoded.id).select("-user_password");

                if (user) {
                    res.status(200).json({ "success": true, token: generateToken(user.id, '1d'), refreshToken: generateToken(user.id, '100d'), })
                }
            } catch (error) {
                res.status(401).json({ "success": false, "message": error })

            }
        }
    })
}