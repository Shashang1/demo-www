const mongoose = require('mongoose')
const models = require('./models')

exports.deleteUser = async() => {
  await mongoose.connect("mongodb://localhost:27017/linkdin",{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  const doc = await models.userModel.findOne({username:"TEST112233"})
  await models.seenModel.deleteOne({userId:doc._id})
  await models.historyModel.deleteOne({userId:doc._id})
  await models.detailModel.deleteOne({userId:doc._id})
  await models.userModel.deleteOne({username:"TEST112233"})
}





