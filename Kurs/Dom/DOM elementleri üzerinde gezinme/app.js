let value;

const todoList=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row");


value=todoList;
value=todo;
value=cardrow;


//child nodes text olanları da alıyor satır satır

value=todoList.childNodes;
value=todoList.childNodes[0];


//children  -element olanları alıcak
value=todoList.children;
value=todoList.children[todoList.children.length-1];
value=todoList.children[2].textContent="degişti";



value=cardrow;
value=cardrow.children;
value=cardrow.children[2].children[1].textContent="burasıda degişti";


value=todoList;
value=todoList.children[0];
value=todoList.firstElementChild;//ilk cocugu  farklı yöntemle allmak için
value=todoList.lastElementChild; //son cocugu farklı yontemle almak için

value=todoList.children.length;
value=todoList.childElementCount;


//elementin ebebeyinlerini bulmak üstündeki elementler için
value=cardrow;
value=cardrow.parentElement;
value=cardrow.parentElement.parentElement;


//elementin kardeşlerini bulmak  ebebeyinleri aynı olan elementler
value=todo;
value=todo.previousElementSibling;
value=todo.nextElementSibling;
value=todo.nextElementSibling.nextElementSibling;
value=todo.previousElementSibling.previousElementSibling;








console.log(value); 