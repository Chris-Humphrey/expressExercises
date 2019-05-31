let express = require('express');
let app = express();

// Not a typical way to do it...
// let index = require('./routes/index')
// app.use(index);

// Without middleware: new request -> run route handler

// With middleware: new request -> middleware -> run route handler

// Middleware - intercepts your routes
// app.use((req, res, next)=>{
//     // res.status(503).send('Site is currently down...')
//     console.log("inside middleware");
//     next();
// })

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views')

// access to CORS needs to be above the routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Instead, we do it all in one step
app.use(require('./routes/index'));
app.use(require('./routes/aboutUs'));



app.listen(3000, () => {
    console.log('App listening on port 3000!');
});