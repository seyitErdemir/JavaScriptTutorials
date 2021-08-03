// alert
// alert("merhaba");



// confirm
// const cevap= confirm("eminmisiniz");
// console.log(cevap);

// if (cevap) {
// console.log("silin gitsin");
    
// }else{
// console.log("silmeyin");
// }



// prompt
// const cevap=prompt("2+2=?");
// console.log(cevap);
// if (cevap=="4") {
// console.log("dogru");
// }else{
// console.log("yanlış");
// }


let value;
value=window;
value=window.location;
value=window.location.host;
value=window.location.hostname;
value=window.location.port;
value=window.location.href;

// if (confirm("sayfa yenilensinmi")) {
//       window.location.reload();  

// }else{
//     console.log("sayfa yenilenmedi");
// }


value=window.outerHeight;
value=window.outerWidth;
value=window.innerWidth;
value=window.scrollX;
// console.log(value);



//Scope kavramı

//global scope
 var value1=10;
 let value2=20;
 const value3=30;

// function func(){
//     var value1=40;
//     let value2=50;
//     const value3=60;

//     console.log(value1,value2,value3);
// }
// func();

// console.log(value1,value2,value3);
console.log("-----------------------");


if (true){
var value1=40;
let value2=50;
const value3=60;
console.log(value1,value2,value3);
}
console.log("-----------------------");
console.log(value1,value2,value3);
