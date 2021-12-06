//XMLHttpRequest() - has responseXML property in the response
"use strict";
var http = require([http]);

document.addEventListener("DOMContentLoaded", () => {
  //fetch the data as soon as the page has loaded
  let url = "https://dblp.uni-trier.de/pid/131/1057.xml";
  fetch(url)
    //.then((response) => response.setHeader("Access-Control-Allow-Origin", url))
    .then((response) => response.text())
    .then((data) => {
      //console.log(data);  //string
      let parser = new DOMParser();
      let xml = parser.parseFromString(data, "application/xml");
      document.getElementById("output").textContent = data;
      console.log(xml);
      coauthorlist(xml);
      //pubtexts(xml);
    });
});

function coauthorlist(x) {
  let list = document.getElementById("coauthors");
  let coauthors = x.getElementsByTagName("na");
  for (let i = 0; i < coauthors.length; i++) {
    let li = document.createElement("li");
    let coauthor = coauthors[i].firstChild.nodeValue;
    li.textContent = coauthor;
    list.appendChild(li);
  }
}

function pubtexts(x) {
  let list = document.getElementById("pubtexts");
  let pubtexts = x.getElementsByTagName("title");
  for (let i = 0; i < pubtexts.length; i++) {
    let li = document.createElement("li");
    let pubtext = pubtexts[i].firstChild.nodeValue;
    li.textContent = pubtext;
    list.appendChild(li);
  }
}
