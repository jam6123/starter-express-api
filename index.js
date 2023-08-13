const express = require('express')
const app = express()
const mysql = require('mysql')

// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'rootadmin',
//   password : 'fiejdl3#jfwjX',
//   database : 'id20081623_firstdb',
//   port: 3306
// });
 
// const SQL_STATEMENT = `INSERT INTO users (username, password) VALUES("?", "?")`

// app.use(express.json())

// connection.end();
// app.post('/', function(req, res) {
//     console.log(req.body)
//     connection.connect();
     
//     connection.query(SQL_STATEMENT, [req.body.username, req.body.password], function (error, results, fields) {
//       if (error) throw error;
//       console.log(results);
//     });
     
//     res.end()
// })

const users = [
    {id: 1, username: 'yassi'},
    {id: 2, username: 'berta'},
    {id: 3, username: 'ywois'},
]

app.get('/users', function(req, res) {
    res.json(users)
})

app.listen(8000)