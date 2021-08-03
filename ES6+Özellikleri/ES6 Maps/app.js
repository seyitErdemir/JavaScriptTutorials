 //mapler  Key(anahtar) - value(değer)


 let myMap =new Map();
 

 const key1="seyit";
 const key2={ a:2, b:3};
 const key3=()=>2;


//Set
 myMap.set(key1,"String DEGER");
 myMap.set(key2,"OBJECT Literal  DEGER");
 myMap.set(key3,"Function DEGER");


//get

// console.log( myMap );

//  console.log( myMap.get(key1));

//  console.log(myMap.size);





const cities =new Map();
cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

//foreach
cities.forEach(function(value,key){
    console.log(key,value);
});


//for of
for (let[key,value] of cities ) {
     console.log(key,value);
    
}

//maps key
for(let key of cities.keys()){
    console.log(key);
}


//maps value
for(let value of cities.values()){
    console.log(value);
}



const array=[["key1","value1"],["key2","value2"]];
const lastMap =new Map(array);
console.log(lastMap);


const arrayy= Array.from(cities);
//
console.log(array);