const express = require('express')
const app = express()

const users = [
    {id: 1, username: 'yassi'},
    {id: 2, username: 'berta'},
    {id: 3, username: 'ywois'},
]

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.send('<h1>It is working. Go to "/users" route to fetch users</h1>') 
})

app.get('/users', function(req, res) {
    res.json(users)
})

app.post('/users', function(req, res) {
    res.json(users)
})

app.listen(process.env.PORT || 3000)
