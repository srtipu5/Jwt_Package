## Jwt Authentication

Library to authenticate via json web token on your application.

# NPM Install

```
npm install @srtipu5/jwt-auth
```

# Yarn Install

```
yarn add @srtipu5/jwt-auth
```

# Sample Setup

```
const { generateToken, verifyToken } = require('@srtipu5/jwt-auth')

const secretKey = 'your-secret-key'
const payload = { userId: 12345, username: 'john_doe' }

const token = generateToken(secretKey, payload)
console.log('Token:', token)

try {
  const decodedUser = verifyToken(secretKey, token)
  console.log('Decoded User:', decodedUser)
} catch (error) {
  console.error('Error:', error.message)
}

```
