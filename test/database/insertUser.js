const database = require('./client')


const users = {_id:1211,username:"KhalDrogo221", password:"43210000"}

const insertUser = async() => {
  const db = await database.getDatabaseClient()
  await db.collection('user').insertMany(users)
}

exports.insertUser = insertUser;