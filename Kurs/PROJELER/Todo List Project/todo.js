//tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();
function eventListeners() { //tüm event listenerlar 
    form.addEventListener("submit", addtodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);


}

function clearAllTodos() {
    if (confirm("tümünü silmek istediginize eminmisiniz")) {
        //arayüzden todoları kaldıracagız
        // todoList.innerHTML ="";// işlemi gerçekleştiriyor ama yavaşkalıyr

        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");

    }
}
function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            //bulamadı
            listItem.setAttribute("style", "display:none !important");

        } else {
            listItem.setAttribute("style", "display:block");
        }

    });


}

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {

        if (e.target.parentElement.parentElement.remove()==undefined) {
            deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
             showAlert("success", "todo  başarıyla silindi");
        }else{
            showAlert("danger", "todo  başarıyla silinmedi");
        }
 
    }  
        
 
}
function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1);// arrayden degeri silebilirz

        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));


}
function loadAllTodosToUI(e) {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}
function addtodo(e) {

    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        // <div class="alert alert-danger" role="alert">
        //     This is a danger alert—check it out!
        // </div>




        showAlert("danger", "lütfen bi todo giriniz");

    } else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Kayıt Başarıyla Gerçekleşti")

    }


    e.preventDefault();
}

function getTodosFromStorage() {//storagedan todoları alacak
    let totos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    //setTimeout metodu ile belli zamanlar da kaldırabilirz

    setTimeout(function () {
        alert.remove();
    }, 1000);

}



function addTodoToUI(newtodo) {
    // <li class="list-group-item d-flex justify-content-between">
    //                         Todo 1
    //                         <a href = "#" class ="delete-item">
    //                             <i class = "fa fa-remove"></i>
    //                         </a>

    //                     </li>


    //list item oluşturma
    const listItem = document.createElement("li");

    // link oluşturma

    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";
    //TEXT node ekleme
    listItem.appendChild(document.createTextNode(newtodo));
    listItem.appendChild(link);


    //todo liste itemı ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";
}


