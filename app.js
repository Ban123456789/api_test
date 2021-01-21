var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.json());
app.use(cors());

app.get('/home', function(req, res){
    res.writeHead(200,{
        'Content-Type': 'text/plain;charset=utf-8'
    });
    res.end('Connect Success !');
});
app.get('/header', function(req, res){
    res.json(req.headers); // header 記得要加 s
});
app.post('/home/add', function(req, res){
    console.log(req.body);
    res.json(req.body);
});


const port = 3000;
app.listen(port, () => {
    console.log(`Connect to http://127.0.0.1:${port}`);
});