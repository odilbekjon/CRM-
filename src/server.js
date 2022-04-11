const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const {auth} = require('./controller/middleWare')
const  { read, write } = require('./lib/fs')
const PORT = process.env.PORT || 5000

// views
app.set('view engine', 'ejs')
app.set('views',path.resolve(__dirname, 'views/'))

// use
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())

// router
const Login = require('./controller/login')
const Admin = require('./controller/admin')
const Teacher = require('./controller/teacher')
const Pupils = require('./controller/pupils')

// get
app.get('/', Login.GET)
app.get('/admin',auth, Admin.GET2)
app.get('/teacher',auth, Teacher.GET3)
app.get('/pupil',auth, Pupils.GET6)

// post
app.post('/', Login.POST)
app.post('/admin', Admin.TeacherPOST)
app.post('/adminC', Admin.CoursePOST)
app.post('/adminP', Admin.PupilPOST)
app.post('/adminG', Admin.GroupPOST)

// get
app.get('/api', (_, res) => {
    const allGroups = read("group.json");
    res.send(allGroups);
});
  
app.get('/api/v2', (_, res) => {
   const allTeachers = read("users.json");
   res.send(allTeachers);
});

app.listen(PORT, console.log(PORT))