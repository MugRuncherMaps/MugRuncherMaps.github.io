console.log("Test script triggered");

//new shit goes here
var xhr = new XMLHttpRequest({mozSystem: true});
xhr.onload = function() {
  dump(xhr.responseXML.documentElement.nodeName);
}
xhr.onerror = function() {
  dump("Error while getting XML.");
}
xhr.open("GET", "https://www.aljazeera.com/xml/rss/all.xml");
xhr.responseType = "document";
xhr.send();