/**
 * entry point for our node express server
 */

var Express = require('express');
var path = require('path');

var app = Express();


app.use('/assets', Express.static(path.resolve(__dirname, '../')));

app.use('*', function(req, res){
    res.sendFile('index.html', {root: './'});
});

app.listen(3000, function(){
    console.log('now listening on port 3000');
});
