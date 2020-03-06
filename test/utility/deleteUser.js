const axios = require('axios')

exports.deleteUser = async(username, password) =>{
  const payload = {"username":username, "password":password}
  await axios.delete("http://localhost:5000/deleteuser",payload)
  
}