const { read, write } = require('../lib/fs')


const GET2 = (req,res) => {
    const users = read("users.json")
    const groups = read("group.json")
    const courses = read("course.json")

    const foundTeacher = users.filter(e => e.role === "teacher")
    const foundPupil   = users.filter(a => a.role === "pupil") 
    res.render('admin', { foundTeacher, foundPupil,  groups, courses,  })
}

// teacher post
const TeacherPOST = (req, res) => {
    const users = read('users.json')
    const { username,  phoneNumber, password,courseName } = req.body
    

    const data = 
         {
              id: users.length + 1,
              username: username,
              role: "teacher",
              phoneNumber: phoneNumber,
              password:password,
              courseName: courseName
         }
    users.push(data)

    write('users.json', users)
    res.redirect("/admin")
}

// course post
const CoursePOST = (req, res) => {
    const courses = read('course.json')
    const { courseName, title ,teacher, price } = req.body
    

    const data1 = 
         {
              id: courses.length + 1,
              courseName: courseName,
              title: title,
              teacher: teacher,
              price: price
         }
    courses.push(data1)

    write('course.json', courses)
    res.redirect("/admin") 
}


// pupil post
const PupilPOST = (req, res) => {
    const users = read('users.json')
    const { username, password, phoneNumber ,groupName,} = req.body
    

    const data2 = 
         {
              id: users.length + 1,
              username: username,
              password:password,
              role: "pupil",
              phoneNumber: phoneNumber,
              groupName: groupName,
         }
    users.push(data2)

    write('users.json', users)
    res.redirect("/admin") 
}

// group post
const GroupPOST = (req, res) => {
    const groups = read('group.json')
    const { groupName, courseName ,username,} = req.body
    

    const data3 = 
         {
              id: groups.length + 1,
              groupName: groupName,
              courseName: courseName,
              username: username,
         }
    groups.push(data3)

    write('group.json', groups)
    res.redirect("/admin") 
}

module.exports = {
    GET2,
    TeacherPOST,
    CoursePOST,
    PupilPOST,
    GroupPOST
}