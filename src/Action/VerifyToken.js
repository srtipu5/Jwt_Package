const jwt = require("jsonwebtoken")

const verifyToken = (secretKey, token) => {
  try {
    const decoded = jwt.verify(token, secretKey)
    return decoded
  } catch (error) {
    throw new Error("Invalid token")
  }
};

module.exports = verifyToken
