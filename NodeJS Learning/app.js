// const express= require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Hello, Welcome to express JS. Way to learn something new in technolog');
// });

// app.get('/example',(req,res)=>{
//     res.send('Yes we in going in the right direction');
// });

// app.get('/example/:name/:age',(req,res)=>{
//     console.log(req.params);
//     res.send(req.params.name + ": " + req.params.age);
// });

// app.listen(3000);

// HTTP post request w/ express and body parser module
// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const app = express();

// app.use('/public',express.static(path.join(__dirname)));
// app.use(bodyParser.urlencoded({extended: false}));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'Static', 'index.html'));
// });

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     //database work here
//     res.send('sucessfully data send');
// });


// app.listen(3000);


// working with the JSON data-express and body parser


// const anss = require('./index');

// console.log(anss(3,6));