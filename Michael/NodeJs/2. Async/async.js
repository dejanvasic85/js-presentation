var fs = require('fs');

console.log('about to read file');

var content = '';

fs.readFile(__dirname + '/logs.txt', 'utf8', function(err, data){
    if(err) {
        console.log('there was an error');
        throw err;
    }
    
    console.log('we have read the file: ')
    console.log(data);
    content = data;
})

console.log('content is: ')
console.log(content)