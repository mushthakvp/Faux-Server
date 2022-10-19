const jwt = require("jsonwebtoken");


//==================================== GENERATE TOKEN ========================================

const generateToken = (id, time) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: time,
    });
};

//==================================== DECODE TOKEN ========================================
const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}


//================================== EXPORT THE FUNCTION ====================================
module.exports = { generateToken, verifyToken }