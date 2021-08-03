// Errow Functiondan Önce
//  const merhaba= function(){
//      console.log("merhaba");
//  }

//  merhaba();




// Errow Functiondan Sonra
// const merhaba =() => {
//     console.log("merhaba");
// }

// merhaba();


//tek parametre alıyorsa parantezlere  tek işlem gerçekleştiriyorsa süslü parantezleri kullanmaya gerke kalmıyor
const merhaba = firstname  =>  console.log("merhaba" , firstname );
merhaba("seyit" );



//ikiside aynı işlemi  gerçekleştirmekte 
// tek bir degişken döndürdügü için alttakınde return a gerek kalmıyor
const cubee= (x)=>{
    return x*x*x;
}
// console.log(cubee(4));

const cube= x => x*x*x;
// console.log(cube(5));



// let number1 ,number2;
arr=[100,200,300];
//  number1=arr[0];
//  number2=arr[1];


// [number1,number2]=[100,200,300,400];

// const [number1,number2]=[100,200,300,400];


// console.log(number1+"  "+number2);







//obje Destructing

const numbers={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const{a:number1,c:number2,e:number3}=numbers;

console.log(number1+"  "+number2 +"  "+number3);




//function destructing

const getLangs=()=>["python","java","c++"];

const [lang1,lang2,lang3]=getLangs();
console.log(lang1,lang2,lang3);



//obje
// const person={
//     name:"seyit erdemir",
//     year:2000,
//     salary:2,
//     showInfos:()=>console.log("Bilgiler Gösteriliyor")
// }
// const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster}=person;

// console.log(isim+" "+yil+ " "+maas );
//  bilgileriGoster()










 //spread Operator
// const langs = ["python","java","c++","php"];
// console.log(langs[0]+langs[1]);
// console.log(...langs);
// const langs2=["js","c#",...langs];
// console.log(...langs2);

// const addNumbers =(a,b,c)=> console.log(a+b+c);

// const numberss=[100,200,300];

// addNumbers(...numberss);







//for in   for of
const person={
    name:"seyit erdemir",
    age:20,
    salary:2 
}
const langs = ["python","java","c++","php"];
const name="seyit";


//for in
for (let prop  in person) {
    console.log(prop,person[prop]);
    
}

//for of 
for (let  character of name) {
    console.log(character);
    
}