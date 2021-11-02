 const person ={
     age:25,
    //  tellAge : function(){
    //      //this personu gösteriyor
    //     console.log(this);
    //     console.log(this.age);
    //  }.bind(this) 

    tellAge:()=>{
        console.log(this);
        console.log(this.age);
    }


     //global dışı this windowu gösteriyor
 }

 person.tellAge();