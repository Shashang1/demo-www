

const filterData = (data, searchquery)=>{
  return data.filter((item)=>{
    var fullname = item.fname+" "+ item.lname;
    if (fullname.toLowerCase().includes(searchquery.toLowerCase())){
      return true;
    }
    return false;
  }).slice(0,10)
}

export default filterData;