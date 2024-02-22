const generateTokenAPI = require("./Action/GenerateToken")
const verifyTokenAPI = require("./Action/VerifyToken")

function generateToken(secretKey, payload) {
  return generateTokenAPI(secretKey, payload)
}

function verifyToken(secretKey, token) {
  return verifyTokenAPI(secretKey, token)
}


module.exports = {
    generateToken,
    verifyToken

}