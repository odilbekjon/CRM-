const { read, write } = require('../lib/fs')
const { verify, sign } = require('jsonwebtoken')

const GET = (req,res) => {
    res.render('login')
}

const POST =(req,res) => {
    const { username, password } = req.body

    const foundUser = read('users.json').find(e => e.username == username  &&  e.password == password)
    
    if(!foundUser){
        return res.redirect('/')
    }

    const { id, role } = foundUser

    res.cookie('token', sign({id: foundUser.id, role, username }, "15ASR57W"))
    res.redirect(`/${foundUser.role}`)
}

module.exports = {
    GET, POST
}