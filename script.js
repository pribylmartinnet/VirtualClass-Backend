const express = require('express')
const app = express()

app.use(express.json())

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.post('/', function(req, res) {
    res.send('Hello World')
})

app.post('/login', function(req, res) {
    console.log(req.body)
    res.send('Hello World')
})

app.post('/register', function(req, res) {
    res.send('Hello World')
})

app.listen(3000, () => { console.log('app.run') }

)