// Code goes here

/* EXAMPLE 1 */
function showHide() {
  var element = document.getElementById('showHideContentParagraph');

  if (element.style.display == 'none') {
    element.style.display = '';
  } else {
    element.style.display = 'none';
  }

}

/* EXAMPLE 2 */
function makeAllListItemsRed() {
  var list = document.getElementById('theList');
  var listItems = document.getElementsByTagName('li');

  for (var i = 0; i < listItems.length; ++i) {
    listItems[i].style.color = 'red';
  }
}

function makeAllListItemsBold() {
  var list = document.getElementById('theList');
  var listItems = document.getElementsByTagName('li');

  for (var i = 0; i < listItems.length; ++i) {
    listItems[i].style.fontWeight = 'bold';
  }
}

function addClassToAllListItems() {
  var list = document.getElementById('theList');
  var listItems = document.getElementsByTagName('li');

  for (var i = 0; i < listItems.length; ++i) {
    listItems[i].className = 'text-right'
  }
}


/* EXAMPLE 3 */

function addRowToTable() {

  var table = document.getElementById('myTable');

  var row = table.insertRow(-1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = 'New data';
  cell2.innerHTML = 'New data';
}

function clickChangeImage(theImage) {
  theImage.src = 'DreamweaverJavaScriptIcon.png';
}

function hoverChangeImage(theImage) {
  theImage.src = 'DreamweaverJavaScriptIcon.png';
}


function refreshData() {
  var xmlhttp;
  if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("dataContainer").innerHTML = xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET", "data.html", true);
  xmlhttp.send();
}