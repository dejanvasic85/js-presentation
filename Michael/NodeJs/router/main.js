module.exports=function(app)
{
    app.get('/', function(req, res){
        console.log('root requested');
      res.send('hello world');
    });
    
    app.get('/about',function(req,res){
        console.log('about requested');
        res.render('about.html');
    });
}