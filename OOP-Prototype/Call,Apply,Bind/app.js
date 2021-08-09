 const obj1={
     number1:10,
     number2:20


 }

 const obj2={
    number1:30,
    number2:40
    

}
function addNumbers(number3,number4){
   
    console.log(this.number1+this.number2+number3+number4);
}

// addNumbers(100,200); //

// addNumbers.call(obj1,100,200);
// addNumbers.call(obj2,100,200);


// addNumbers.apply(obj1,[100,200]);
// addNumbers.apply(obj2,[100,200]);



//bind
function getNumbersTotal(number3,number4){
    return this.number1+this.number2+number3+number4;
}

const copyfunc1=getNumbersTotal.bind(obj1);
const copyfunc2=getNumbersTotal.bind(obj2);

console.log(copyfunc1);
console.log(copyfunc2);
console.log(copyfunc1(100,200));








//Kalıtım - Inheritance

function Person(name,age){
    this.name=name;
    this.age=age;


}
Person.prototype.showInfos=function(){
    console.log("isim :"+this.name + "yaş: "+ this.age);
}

// const person = new Person("seyit",21);
// console.log(person);

function Employee(name,age,salary){
    // this.name=name;
    // this.age=age;
    // yerine

    Person.call(this,name,age);
    //kullanılabiliriz

    this.salary=salary;
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.toString=function(){
    console.log("employe");
}

//overriding  -iptal etme -ezme
Employee.prototype.showInfos=function(){
    console.log("isim :"+this.name + "   yaş: "+ this.age+ "  maaş:"+this.salary);

}
const emp= new Employee("seyit",21,300);
console.log(emp);
emp.showInfos();
 