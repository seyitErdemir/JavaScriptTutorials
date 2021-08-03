//Degişken oluşturma
//  var a=20;
//  var b=10;
//  var c=40;
//  console.log(a,b,c);

//primitive veri tipleri 
var a=10; //number veri tipi ilkel tip
var b= 3.14;
console.log(typeof a,b);

//string
var name="seyit";
console.log(typeof name);

//boolen 
var a=true;
console.log(typeof a);

var a=null;
console.log(a);
console.log(typeof a);

//undifiend
var x;
console.log(x);




//referance veri tipleri

var numbers=[1,2,3,4,5,6];
console.log(numbers);
console.log(typeof numbers);
console.log( numbers[1]);


var person={
    name:"mustafa",
    age:25
}
console.log(person);
console.log(typeof person);


var date=new Date();
console.log(date);
console.log(typeof date);



var merhaba =function(){
    console.log("mergasba");
}
console.log(merhaba);
console.log(typeof merhaba);



var a=10;
var b=a;
console.log(a,b);
var a=20;
console.log(a,b)



var a=[1,2,3];
var b=a;
a.push(4);
console.log(b);


