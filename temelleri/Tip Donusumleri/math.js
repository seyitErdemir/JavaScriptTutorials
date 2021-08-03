let value;

// veri tiplerini string e cevirme
value =String(123);
value=String(3.14);
value=String(true);
value=String(false);

value=String(function(){
    console.log()
});
value=String([1,2,3,4]);
value=(10).toString();


//verileri sayılara çevirme

value=Number(1213);
value=Number(null);
value=Number(undefined);
value=Number("hello world");
value=Number(function(){
    console.log()
});
value=Number([1,2,3,4,5]);
value=Number(3.14);
value=parseFloat("3.14");
value=parseInt("3");


const a=Number("30")+34;
console.log(a);
console.log(typeof a);







console.log(value);
console.log(typeof value);