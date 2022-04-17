const mongoose = require('mongoose')
const mongoDB = "mongodb://localhost:27017/apartmentManagement-2"

module.exports = ()=>mongoose.connect(mongoDB)