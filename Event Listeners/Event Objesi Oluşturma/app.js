// const filterInput=document.getElementById("filter");
// const todoForm=document.getElementById("todo-form");


// todoForm.addEventListener("submit",submitForm);

// function submitForm(e){
//     console.log("submit eventi");


// //sayfa yenilenmesini engelledi
//     e.preventDefault();
// }



// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);

//     // console.log("naber");
// });





// filterInput.onfocus=function () {
//     console.log("naber");
// }






//klavye eventleri

//keypress  harfler + sayılar 
//  document.addEventListener("keypress",run);
// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }



//keydown   klavyede bulunan bütün tuşlar için

// document.addEventListener("keydown",run);
// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }


//keyup
// document.addEventListener("keyup",run);
//  function run(e){
//     // console.log(e.which);
//      console.log(e.key);
// }


const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);
function changeText(e) {

    header.textContent = e.target.value;
    console.log(e.target.value);

}


//mause eventleri
const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

//click eventi
// title.addEventListener("click",run);

//double click eventi
// title.addEventListener("dblclick",run);


//mouse down
// title.addEventListener("mousedown",run);

//mouse up
// title.addEventListener("mouseup",run);


//mouse over
//  title.addEventListener("mouseover",run);



//mouse out
// title.addEventListener("mouseout",run);

// cardBody.addEventListener("mouseout",run);
// cardBody.addEventListener("mouseover",run);



//mouse enter ve mouse leave
// cardBody.addEventListener("mouseenter",run);
// cardBody.addEventListener("mouseleave",run);


// function run(e){
//     console.log(e.type);
// }






//************************************************** */





//document.addEventListener("DOMContentLoaded",load);
// function load(e){
//     console.log("sayfa yüklendi");
// }


const filter = document.getElementById("filter");

//focus
// filter.addEventListener("focus",run);
//blur
// filter.addEventListener("blur",run);

//paste
// filter.addEventListener("paste",run);

//copy
// filter.addEventListener("copy",run);

//cut
// filter.addEventListener("cut",run);

//select
// filter.addEventListener("select",run);

function run(e) {
    console.log(e.type);
}



//event bubbling
// document.querySelector(".container").addEventListener("click",function(){
//     console.log("div container");
// });
//  document.querySelector(".card.row").addEventListener("click",function(){
//      console.log("Card Row");
//  });


// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("cord body");
// })


//event  capturing veya Delegation
// const cardbody = document.querySelectorAll(".card-body")[1];
// cardbody.addEventListener("click", run);
// function run(e) {
//     if (e.target.className === "fa fa-remove") {
//         console.log("silme işlemi");
//     }
//     console.log(e.target);
// }


