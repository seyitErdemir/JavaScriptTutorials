 //syntactic sugar
//  function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;

//     this.salary=salary;
// }
// Employee.prototype.showInfos=function(){
//     console.log("isim ="+this.name+"  yaş= "+this.age +" maaş ="+ this.salary);
// }

// const emp=new Employee("seyit",21,3333);
// console.log(emp);
























// class Employee{
//     constructor(name,age,salary){
//         this.name=name;
//         this.age=age;
//         this.salary=salary;
//     }

//     showInfos(){
//     console.log("isim ="+this.name+"  yaş= "+this.age +" maaş ="+ this.salary);

//     }
// }

// const emp=new Employee("seyit",21,2222);
// console.log(emp);

// emp.showInfos("seyit",21,2222);

















//statik metodlar

class Matamatik{
    sqrt(x){
        console.log(x*x);
    }
   static cube(x){
        console.log(x*x*x);
    }

}

const math =new Matamatik();
 console.log(math);
 Matamatik.cube(5);//statik oldugu için direk classtan kullanılabiliyor nesne ürettügün zaman ise kullanılamıyor

 math.sqrt(7);
//  Matamatik.sqrt(7);//statik olmadıgı için classtan direk kullanılmıyor o class a ait bir objeden çagırılıyor












//ES6 kalıtım interface

//  function Person(name,age){
//     this.name=name;
//     this.age=age;


// }
// Person.prototype.showInfos=function(){
//     console.log("isim :"+this.name + "yaş: "+ this.age);
// }
 
// function Employee(name,age,salary){ 
//     Person.call(this,name,age);
  
//     this.salary=salary;
// }

// Employee.prototype=Object.create(Person.prototype);
// Employee.prototype.toString=function(){
//     console.log("employe");
// }
 
// Employee.prototype.showInfos=function(){
//     console.log("isim :"+this.name + "   yaş: "+ this.age+ "  maaş:"+this.salary);

// }
// const emp= new Employee("seyit",21,300);
 
 //şeklinde yazıyorduk es6 dan önce

class Person{  //super class   base class
    constructor(name,age){
        this.name=name;
        this.age=age;
         
    }
    showInfos(){
       console.log("isim :"+this.name + "   yaş: "+ this.age);
        
        }
}

class Employee extends Person{  //derivedClass /subclass/  childclass
    constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        super(name,age);//üst sınıfın constructor metodunu kullanmak istiyoruz demek
        // super.showInfos();  burada da showInfos metodunu kullanmak istedk
        this.salary=salary;

    }
    showInfos(){//overriding
    console.log("isim :"+this.name + "   yaş: "+ this.age+ "  maaş:"+this.salary);
        
    }
    toString(){//overriding
        console.log("employee")
    }
}
const emp=new Employee("seyit",21,2222);
console.log(emp);
emp.showInfos();
emp.toString();

