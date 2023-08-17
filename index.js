const express = require('express')
const app = express()

const users = [
    {id: 1, username: 'yassi'},
    {id: 2, username: 'berta'},
    {id: 3, username: 'ywois'},
]

app.use(express.static('public'))

app.get('/users', function(req, res) {
    res.json(users)
})

app.post('/users', function(req, res) {
    res.json(users)
})

app.listen(process.env.PORT || 3000)
