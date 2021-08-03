//elementi id ye göre seçme
let element;
element=document.getElementById("div");
element=document.getElementById("div2");


//element class a göre seçme
element=document.getElementsByClassName("a")[0];

//element tag e göre seçme
element=document.getElementsByTagName("h1");


//Query Selector - Css Selecter tek bir element dönmekte 

element=document.querySelector(".a");
element=document.querySelector("#div");

element=document.querySelector("h1");
element=document.querySelector("div");

//Query SelectorAll  birden çok element döndürürken ise


// element=document.querySelectorAll(".a");
// element.forEach(function(el) {
//    console.log(el); 
// });

// console.log(element);




//element seçme ve style özelliklerini degiştirme
 element=document.querySelector("#div");


 //element özellikleri
console.log(element.id);
console.log(element.className);
console.log(element.classList[0]);
console.log(element.textContent); 
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);

console.clear();

//style ve element özelliklerini degiştirme
element.className="btn-btn"
element.style.color="#fff"
element.style.marginLeft="50px";
element.href="https://www.google.com";



console.log(element.textContent);
element.textContent="silindi";
element.innerHTML="<span style='color:green' > Silin </span>"


//console.log(element.textContent);


element=document.querySelectorAll("div");
element.forEach(function(item) {
   item.style.color="#fff";
   item.style.background="#000";
      console.log(item);

});

console.clear();

let element2=document.querySelector("li:first-child");
 element2=document.querySelector("li:nth-child(0)");


console.log(element2);




