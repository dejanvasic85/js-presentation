var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log('root requested');
  res.send('hello world');
});

app.get('/about',function(req,res){
    console.log('about requested');
    res.render('about.html');
});

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen('9999');