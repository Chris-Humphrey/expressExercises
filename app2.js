var express = require('express')
var app = express()
var port = 3000




app.get('/', (req, res)=>{
    res.send('Hello, world!')
})

app.get('/cats', (req, res)=>{
    res.send('Meow!')
})

app.get('/dogs', (req, res)=>{
    res.send('Woof!')
})

app.get('/cats_and_dogs', (req, res)=>{
    res.send('Living together')
})

app.get('/greeting/:name', (req, res)=>{
    let name = req.params.name
    res.send(`Hello, ${name}!`)
})

app.get('/hello1', (req, res)=>{
    let name = req.query.name || 'world';
    res.send('Hello ' + name + '!');
})

app.get('/year', (req, res)=>{
    let year = (2019 - req.query.year);
    res.send('You were born in ' + year)
})



app.listen(port, function(){
    console.log('Your server is now running...')
})