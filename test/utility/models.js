const mongoose = require('mongoose')
var schema = mongoose.Schema;

var detailSchema = new schema({
  username:{type:String, requried:true},
  userId:{type:schema.Types.ObjectId, requried: true, unique:true},
  fname:{type:String, requried:true},
  lname:{type:String, requried:true},
  worksAt:{type:String, require:true},
  position:{type:String ,requried:true},
  mode:{type:String, required:true},
  image:{type:String}
})
exports.detailModel = mongoose.model("detailModel", detailSchema, "details")


var historySchema = new schema({
  userId:{type:schema.Types.ObjectId, required:true, unique:true},
  loginHistory:{type:Array},
  logoutHistory:{type:Array}
})
exports.historyModel = mongoose.model("historyModel", historySchema, "history")

var seenSchema = new schema({
  userId:{type:schema.Types.ObjectId, required:true},
  seen:{type:Array}
})

exports.seenModel = mongoose.model("seenModel", seenSchema, "seen")

var userSchema = new schema({
  username:{type:String, unique:true, trim:true, requried:true},
  password:{type:String, trim:true, requried:true}
})
exports.userModel = mongoose.model("userModel", userSchema, "user")