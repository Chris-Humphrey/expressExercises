let express = require('express');

let app = express();
let port = 3000;


app.use(express.static('public'))

// home page
app.get('/', (req, res)=>{
    res.send('hello world')
});

// about page
app.get('/about', (req, res)=>{
    res.send('about us')
});

// images
// app.get('/photos', (req, res)=>{
//     let images = req.query.images;
//     res.send(`<img src="${images}">`);
// })
app.get('/photo', (req, res)=>{
    res.send(`<img src="/images/tacos.jpg">`);
});


// ? denotes character before is optional
// app.get('/pictures?', (req, res)=>{
//     res.send('pictures')
// });

app.get('/picture*', (req, res)=>{
    res.send('pictures or albums')
});

app.get('/menu', (req, res)=>{
    let bbq = req.param('bbq')
    res.send(bbq)
});

app.get('/calculator', (req, res)=>{
    let a = req.param('a')
    let b = req.param('b')
    let c = parseInt(a) + parseInt(b);
    res.send(`the result of ${a} + ${b} = ${c}`)
});

app.get('/name/:fname', (req, res)=>{
    // let fn = req.param('fname')
    let fn = req.params.fname
    res.send(fn)
});

app.get('/calculator2/:a/:b', (req, res)=>{
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b)
    res.send(`the result is ${a + b}`)
})

app.get('/flights/:from-:to', (req, res)=>{
    res.send(`Departing : ${req.params.from}   Arriving : ${req.params.to}`)
})

app.get('/something', (req, res)=>{
    let shoe = req.query.shoe || "loafers"
    res.send(`${shoe}`)
})



app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});