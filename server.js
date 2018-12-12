//response should be csv report and form

var express = require('express');
var bodyparser = require('body-parser');
var convert = require('./converter.js');

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.set('view engine','ejs');
app.listen(3000, () => { console.log(`Shortly is listening on 3000`); });


app.get('/', (req,res) => {
    res.render('index');
})

app.post('/', (req,res) => {
    var input = JSON.parse(req.body.input);
    console.log(convert(input));
})