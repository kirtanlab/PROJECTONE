//XMLHttpRequest() - has responseXML property in the response
"use strict";
var http = require([http]);

document.addEventListener("DOMContentLoaded", () => {
  //fetch the data as soon as the page has loaded
  let url = "https://dblp.uni-trier.de/pid/131/1057.xml";
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      let parser = new DOMParser();
      let xml = parser.parseFromString(data, "application/xml");
    });
});
let title = $($xml.find("title")[i]).text();
//     let title_doc = document.getElementById("pubtitle");
//     title_doc.innerHTML = title;

let resume = document.getElementById("resume");
let main = document.getElementById("content-publication");
for(let i =0;i < 5; i++){
  //$(".pub").append(resume);
  $("#resume").appendTo(".pub");
}

function yeararray(){
  let years = [];
      //let section = document.getElementById();
      for(let i=0; i < pub_num;i++ ){
      let year = $($xml.find("year")[i]).text();
      years.push(year);
      
    
  }
  return years;
}

function pubtext(x){

  let $xml = $(x); 
  let xmlContent = '';
  let pub_num = $xml.find("article").length;
  //let articles = $xml.querySelectorAll('article');
  let doc_articles = document.getElementById('content-publication');

  //year
    /*
    let year = $($xml.find("year")[i]).text();
    let year_doc = document.getElementById("year");
    year_doc.innerHTML = year;
    */     
    //let year

    //let resume = $("#resume").html();
    //year
    //$("year").html("");

    $('resume').each(year,function (i,val){
      $(this).
      $(this).addclass("row resume-timeline");
    }
 // });
//}
    )
  }





function pid(x,i){
  var $xml = $(x);
  let pid = $($xml.find("na")[i]).attr("pid");
  return pid;
}

function coauthorlist(x) {
  let url = "https://dblp.uni-trier.de/pid/131/1057.xml";
  
  let list = document.getElementById("coauthors");
  
  let coauthors = x.getElementsByTagName("na");
 
  for (let i = 0; i < coauthors.length; i++) {
    /*let li = document.createElement("li");
    let coauthor = coauthors[i].firstChild.nodeValue;
    
    li.textContent = coauthor;
    list.appendChild(li);
    */
    let li = document.createElement("li");
    
    let coauthor = coauthors[i].firstChild.nodeValue;
    
    var button = document.createElement("button");
    button.innerHTML = coauthor + "<hr>";

    

    list.appendChild(button);
    list.appendChild(li);
    
    let url_modified = "https://dblp.uni-trier.de/pid/"+pid(x,i);
    //console.log(url_modified);
    button.addEventListener("click", function(){
      window.location=url_modified;
    });
  }
}





// function pubtexts(x){
//   var $xml = $(x);

//   /*COMPELTED publication number*/
//   let pub_num = $xml.find("article").length;
//   //console.log("pub_num: " + pub_num);
  
//   let pub_num_doc = document.getElementById("num_pub");
//   pub_num_doc.innerHTML = "Completed Number of Publications: " + pub_num + "<hr width='480px color='black' >";
  


//   /*Inproceeding publication number*/
//   //let pub_num_in = $xml.find("inproceedings").length;
//   //let pub_num_doc_in = document.getElementById("num_pub_in");
//   //pub_num_doc.innerHTML = "Inproceeding Number of Publications: " + pub_num_in + "<hr width='480px color='black' >";
//   /* end */

//   //console.log("pub_num: " + pub_num);
//   //console.log("pub_num_in : " +pub_num_in);
//   /* end */
  
//   for(let i=0; i < pub_num; i++){
//     /*year */
//     //let year = ($($($($xml.find(("r"))).find("inproceedings")).find("article"))).find("year");
//     let year = $($xml.find("year")[i]).text();
//     let year_doc = document.getElementById("year");
//     year_doc.innerHTML = year;
//     //console.log(year);
//     /*end*/

//     /* title */
//     let title = $($xml.find("title")[i]).text();
//     let title_doc = document.getElementById("pubtitle");
//     title_doc.innerHTML = title;
//     //console.log(title);
//     /*end*/

//     /*co-author for individual publication*/
//     //while()
//     let num_author_pub = $($xml.find("article")[i]).children("author").length;
//     //let num_author_inpro = $($xml.find("inproceedings")[0]).children("author").length;
//     //console.log(num_author);
//     let pub_author =document.getElementById("pubauthors");

//     for(let j=0; j < num_author_pub; j++){
//       let name_author = $($($xml.find("article")[i]).children("author")[j]).text();
//       //console.log(name_author);
//       if(name_author != "Shirshendu Das"){
//         let li = document.createElement("li");
//         li.textContent = name_author;
//         pub_author.appendChild(li);
//       }
//     }
//   }
//   //let title_doc = document.getElementById("pubtitle");
//   //title_doc.innerHTML = title;
//   //console.log(cothor);

//   /*end*/
  
  
// }
