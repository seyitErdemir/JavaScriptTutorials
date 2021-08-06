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

addNumbers(100,200); 