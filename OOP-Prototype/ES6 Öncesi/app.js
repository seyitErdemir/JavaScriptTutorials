// console.log(this);  global scope
// const emp1 ={ // object litearal
//     name:"mustafa",
//     age:25,
//     showInfos:function(){
//         console.log("Bilgiler Gösteriliyor");
//     }
// };
// const emp2={
//     name:"seyit",
//     age: 20
// }
// console.log(emp1);






function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function () {
        console.log(this.name,this.age,this.salary);
    }
}


const emp1 = new Employee("seyit", 20, 3000);
const emp2 = new Employee("ali", 30, 4000);


emp2.showInfos();
