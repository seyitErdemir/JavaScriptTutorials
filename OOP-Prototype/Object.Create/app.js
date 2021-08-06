//  const obj={
//     test1:function(){
//         console.log("test1");
//     },
//     test2:function(){
//         console.log("test2");
//     }
//  }
// //  console.log(obj);

// const emp = Object.create(obj);
// console.log(emp);





function Person(){
//constructer
}

Person.prototype.test1=function(){
    console.log("test1");

}

Person.prototype.test2=function(){
    console.log("test2");

}
 

function Employee(name,age){
    this.name=name;
    this.age=age;
}

Employee.prototype =Object.create(Person.prototype);
Employee.prototype.myTest=function(){
    console.log("mYtest");
}
const emp=new Employee("seyit",5);
console.log(emp);

7
