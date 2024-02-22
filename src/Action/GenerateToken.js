const jwt = require("jsonwebtoken")

const generateToken = (secretKey, payload, expiresIn = "1h") => {
  if (!secretKey) {
    throw new Error("Secret key is required for JWT authentication.")
  }
  return jwt.sign(payload, secretKey, { expiresIn })
};

module.exports = generateToken
