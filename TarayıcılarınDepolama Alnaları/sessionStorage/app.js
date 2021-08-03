//sessionStorage  key ve value

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");


//inputlar
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);


function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value);
}
function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value);
}
function clearItems(e) {
    sessionStorage.clear();
}

//local storage 
localStorage.setItem("hareket", "burpee");
localStorage.setItem("tekrar", 50);




//get ıtem 

// const valuee=localStorage.getItem("tekrar");
// console.log(valuee);
// console.log( typeof valuee);

//clear local ctroge
// localStorage.clear();

// console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("hareket") ===null) {
//     console.log("veri bulunmuyor");

// }else{
//     console.log("veri bulunuyor");

// }


//local storge array yazma
const todos = ["todo 1", "todo 2", "todo 3"];
localStorage.setItem("totos", JSON.stringify(todos));
console.log(JSON.parse(localStorage.getItem("totos")));

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addtodo);
function addtodo(e) {
    const value=todoInput.value;
    let todos;

    if (localStorage.getItem("todos")=== null) {
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));
    e.preventDefault();
}