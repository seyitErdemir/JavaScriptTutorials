//yeni element oluşturma
// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>
const newLink=document.createElement("a");
const cardbody=document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.className="btn  btn-danger";
newLink.href="https://google.com.tr";
newLink.target="_black";

//text content  
//kullanımına dikkat edilmeli çünkü
//aldıgımız elementin bütün çocuklarını silip yerine text yazar sadece

//cardbody.textContent="asdasda";  bu yorumu acınca anlarsın 


//text node
const text=document.createTextNode("naber");
//cardbody.appendChild(text);
// burada istedigimiz işlemi yapabiliyoruz  appenchild en son cocuktan sonraya gidiyor


newLink.appendChild(document.createTextNode("farklı sayfaya git"));
cardbody.appendChild(newLink);


newLink.textContent="farkli sayfaya git";
console.log(newLink);






//dinamik element silme

const todoList=document.querySelector("ul.list-group");
const todox=document.querySelectorAll("li.list-group-item");


//remove metodu
//todox[3].remove();

//remove child
//todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todox[2]);


//bu şekilde silinebilir
console.log(todox);
console.log(todoList);


//replace  elemetleri birbirleri ile degiştirme
//<h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardBody=document.querySelectorAll(".card-body")[1];
const newElement=document.createElement("h3");
newElement.className="card-title";
newElement.id="tasks-title";
newElement.textContent="yeni todolar";


//eski element
const oldElement=document.querySelector("#tasks-title");
cardBody.replaceChild(newElement,oldElement);


console.log(newElement);




console.clear();


const todoInput=document.getElementById("todo");
let element;


element=todoInput;
element=todoInput.classList;

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");

element=todoInput;
element=todoInput.placeholder;
element=todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","naber");
todoInput.setAttribute("title","input");

todoInput.removeAttribute("name");
element=todoInput;
// element=todoInput.hasAttribute("name");



console.log(element);







