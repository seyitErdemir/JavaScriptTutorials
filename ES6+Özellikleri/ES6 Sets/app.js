 //setler  kümeler

 const myset = new Set();

 myset.add(100);
 myset.add(100);
 myset.add(3.14);
 myset.add("seyit");
 myset.add(true);
 myset.add([1,2,3]);
 myset.add({a:2,b:2});


 const myset2 = new Set([100,3.14,"seyit"]);
 console.log(myset );

 console.log(myset2);


 //size
 console.log(myset.size);


 //Delete
 myset.delete("seyit");
 console.log(myset );



 //has metodu

 
 console.log(myset.has("seyit") );
 console.log(myset.has(100) );


 //foreach 
 myset.forEach(function(value){
        console.log(value);
 });


 //for of
 for (let  value of  myset ) {
    console.log(value);
         
 }

const array = Array.from(myset);
console.log(array);
