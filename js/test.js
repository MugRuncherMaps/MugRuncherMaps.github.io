console.log("Test script triggered");

//new shit goes here

$.get("https://www.aljazeera.com/xml/rss/all.xml",
function(xmlData){
     var $page = $(xmlData);
 }
);