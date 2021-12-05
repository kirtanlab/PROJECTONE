"use strict";
/* OLD
const publicationEl = document.querySelector(".content-publications");
const coAuthorEl = document.querySelector(".content-co-author");
const wordcloudEl = document.querySelector(".content-wordcloud");
const tabsEl = document.querySelector(".heading-tabs");
coAuthorEl.addEventListener("click", function () {
    tabsEl.classList.
});
*/
function opentab(evt, fun) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(fun).style.display = "block";
    evt.currentTarget.className += " active";
  }
