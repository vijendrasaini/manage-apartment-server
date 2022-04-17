const mongoose = require('mongoose')
// const mongoDB = "mongodb://localhost:27017/apartmentManagement-2"
const mongoDB = `mongodb+srv://vijendra:vijendra@cluster0.mpexw.mongodb.net/apartmentmanagement?retryWrites=true&w=majority`

module.exports = ()=>mongoose.connect(mongoDB)