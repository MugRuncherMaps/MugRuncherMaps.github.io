console.log("Test script triggered");

//new shit goes here
var xhr = new XMLHttpRequest();
xhr.onload = function() {
	console.log(xhr.responseURL);
	dump(xhr.responseXML.documentElement.nodeName);
}
xhr.onerror = function() {
  dump("Error while getting XML.");
}
xhr.open("GET", "https://www.aljazeera.com/xml/rss/all.xml");
xhr.responseType = "document";
xhr.send();
