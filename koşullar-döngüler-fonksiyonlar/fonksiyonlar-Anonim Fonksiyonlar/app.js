function merhaba(name = "bilgi yosk", age = "bilgi yoksss") {

    if (typeof name == "undefined") name = "bilgiyok";
    if (typeof age == "undefined") age = "bilgiyok";


    console.log(`isim: ${name} yaş: ${age}`);
}

merhaba("ayşe", 24);// fonksiyon çagırma (function call)
merhaba();
merhaba("seyt");


function squre(x) {
    return x * x;
    console.log("hiç çalışmıcak returnden  ötürü");
}

function cube(x) {
    return x * x * x;

}

let b = cube(squre(2));
console.log(b);
let a = squre(12);
a = cube(a);
console.log(a);


function meraba() {
    return "merhabax";
}
console.log(meraba());


const merha = function (name) {
    console.log("merhabaxx : " + name);
}
merha("1");

//immediately invoked function expression (IIFE)

(function (name) {
    console.log("merhabaxxx : " + name);
})("seyit");


const database = {
    host: "localhost",
    add: function () {
        console.log("eklendi");
    },
    get: function () {
        console.log("elde edildi");
    },
    update: function (id) {
        console.log(`id:${id} güncellendi`);
    },
    delete:function(id){
        console.log(`id:${id} silindi`);
    }
}
console.log(database.host);
database.add();
database.update(10);