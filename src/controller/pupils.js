const { read, write } = require('../lib/fs')


const GET6 = (req,res) => {
    const users = read('users.json')
    const foundPupil   = users.filter(a => a.role === "pupil") 
    res.render('pupil', { foundPupil } )
}

module.exports = {
    GET6
}