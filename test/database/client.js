const {MongoClient} = require('mongodb')

let db = null;
exports.getDatabaseClient = async() =>{
  if(!db){
    const options = {sslValidate:false, keepAlive:1, connectTimeoutMS:5000, useNewUrlParser:true, useUnifiedTopology:true};
    const client = await MongoClient.connect("mongodb://localhost:27017/linkdin", options)
    const databaseName = "linksin"
    db = client.db(databaseName)
  }
  return db;
}

