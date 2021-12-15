//npm run build  
// build  = package.json =>  scripts build:

// module.exports = function test1() {
//     console.log("test 1")
// }
// module.exports = function test2(params) {
//     console.log("test 2")

// }

//bu yöntemle tek bir fonksiyon ekleniyor


// module.exports.test1 = function test1() {
//     console.log("test 1")
// }
// module.exports.test2 = function test2(params) {
//     console.log("test 2")  
// }
//bu şekilde her fonksiyonu ayrı ayrı kullanmamızı saglıyor


// module.exports =
// {
//     name: "seyit",
//     test1: function () {
//         console.log("test1")
//     }
// }
//     ,
// {
//     name:"seyit2",
//     test2: function() {
//         console.log("test 2")
//     }

// }


// export const name="seyit"
// export class Person{
//     static test(){
//         console.log("test 1")
//     }

// }

export function test(){
    console.log("deneme test")
}
export class Person{
    static  Test(){
        console.log("test")
    }
}

export const employee={
    name:"seyit",
    salary:4000
}

export default class Deneme{
   static    test() {
        console.log("deneme")
    }
}