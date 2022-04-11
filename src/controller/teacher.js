const { read, write } = require('../lib/fs')
const { verify } = require("jsonwebtoken")

const GET3 = (req,res) => {


const { token } = req.cookies;
  const user =  verify(token, '15ASR57W')
  const userFilter = user.username


  if (!token) {
    return res.redirect("/")
  } else {
    const verifiedUser = verify(token, "15ASR57W")
    const role = verifiedUser.role
    
    const allTeachers = read("users.json")
    const allGroups = read("group.json")

    const foundGroup = allGroups.filter(group => group?.username == userFilter  );
    res.render('teacher.ejs', {
      userFilter,
      groups: foundGroup
    })
    
  }
}


    

module.exports = {
    GET3
}