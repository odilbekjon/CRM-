const { verify } = require("jsonwebtoken")

const auth = (req, res, next) => {
     const { token } = req.cookies
     verify(token, '15ASR57W', (err, decoded) => {
          if (err) return res.redirect("/")
          next()
     })
     
}

module.exports = {
    auth
}