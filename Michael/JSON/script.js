function writeOutput(output) {
  var o = document.getElementById('output');
  o.innerHTML += "<div>" + output + "</div>";
}

function clearOutput() {
  var o = document.getElementById('output');
  o.innerHTML = "";
}

function simpleObj() {
  var michael = {
    firstName: 'Michael',
    surname: 'Blackley',
    email: 'michael.blackley@tal.com.au',
    phone: '0412345678'
  };

  clearOutput();
  writeOutput(michael.firstName);
  writeOutput(michael.surname);
  writeOutput(michael.email);
  writeOutput(michael.phone);
}

function nestedObj() {
  var imgObj = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "image": {
      "url": "images/0001.jpg",
      "width": 200,
      "height": 200
    },
    "thumbnail": {
      "url": "images/thumbnails/0001.jpg",
      "width": 32,
      "height": 32
    }
  }

  clearOutput();
  writeOutput(imgObj.id);
  writeOutput(imgObj.type);
  writeOutput(imgObj.name);
  writeOutput('image url: ' + imgObj.image.url);
  writeOutput('image height: ' + imgObj.image.height);
  writeOutput('image width: ' + imgObj.image.width);
  writeOutput('thumbnail url: ' + imgObj.thumbnail.url);
  writeOutput('thumbnail height: ' + imgObj.thumbnail.height);
  writeOutput('thumbnail width: ' + imgObj.thumbnail.width);
}

function arrayObj(){
  var arrObj = {
    members: [
      { firstName: 'Michael', lastName: 'Blackley'},  
      { firstName: 'Dejan', lastName: 'Vasic'},
      { firstName: 'John', lastName: 'Smith'},
    ]
  };
  
  clearOutput();
  for(var i=0; i<arrObj.members.length; i++) {
    writeOutput(arrObj.members[i].firstName + ' ' + arrObj.members[i].lastName);
  }
  
}
