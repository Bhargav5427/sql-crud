let express = require('express')
let userRoute = require('./users.routes')
let router = express.Router()


router.use("/user",userRoute)


module.exports = router