// const object = new Object();//object literal
// object.name="seeyit";
// console.log(object);


// function Employee(name,age){
//     this.name=name;
//     this.age=age;
//     this.showInfos = function(){
//         console.log("Bilgiler Gösteriliyor");
//     }
//     this.toString =function(){
//         console.log("TO String Gösteriliyor");
        
//     }
// }

// const emp1 = new Employee("Seyit",20);
// console.log(emp1);

// console.log(emp1.toString());









function Employee(name,age){
    this.name=name;
    this.age=age;
  
     
}
Employee.prototype.showInfos = function(){
    console.log("isim:"+this.name+"Yaş: "+this.age);
}


const emp1= new Employee("seyit",22);
const emp2= new Employee("oguz",21);

console.log(emp1);
console.log(emp2);