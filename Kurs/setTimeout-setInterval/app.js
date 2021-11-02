//set Timeout

// setTimeout(function() { 
//    console.log("naber");
// }, 5000);

let i=0;
let value= setInterval(function(){
  i++;
   console.log("sayı"+ i);

},1000);
 
document.getElementById("btn").addEventListener("click",function(){
   clearInterval(value);
});