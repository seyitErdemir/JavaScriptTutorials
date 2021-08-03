let value;

const programmer={
    name:"seyit erdemir",
    age:25,
    email:"seyit erdemir asdasd",
    langs:["python","java","javascript"],
    address:{
        city:"ankara",
        street:"bahçeli evler"
    },

    work:function(){
        console.log("program çaşoıasd");
    }
}
value=programmer;
value=programmer.email;//genel olarak bu kullanılıyor
value=programmer["email"];

value=programmer.langs;
value=programmer.address.city;

programmer.work();

const programmers=[
    {name:"seyit",age:21, },
    {name:"arif",age:15, }
];

value=programmers[0].name;
console.log(value);