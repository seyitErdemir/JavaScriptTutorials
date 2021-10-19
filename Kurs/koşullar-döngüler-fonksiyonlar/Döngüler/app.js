//while döngüsü
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }



// let i=10;
// while(i>0){
//     console.log(i);
// i--;
// }


// let i=10;
// while (i>0) {
//     console.log(i);
//     i=i-2;
// }


// let i=0;
// while (i<10) {
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++;
// }

// let i=0;
// while (i<10) {
//     if (i==3  ||  i==5) {
//         i++;
//         continue;
        
//     }
//     console.log(i);
//     i++;
    
// }



// do while döngüsü
// let i=0;
// do{  // önce işlem gerçekleştirilir daha sonrasında kontrol yapılır 
// console.log(i);
// i++;
// }while (i<10);  


//for dögüleri
const langs=["ptyhon","java","c"]

// let index=0;
// while (index<langs.length) {
//     console.log(langs[index]);
//     index++;
// }

// for(let i=0;i<langs.length;i++){
//     console.log(langs[i]);

// }


// langs.forEach(function(lang,index){
//     console.log(lang,index);
// });




// const users=[
//     { name:"seyit",age:20},
//     { name:"arif",age:15},
//     { name:"gazi",age:48}
// ];
// const names=users.map(function(user){
//     return user.name;
// });
// const ages=users.map(function(user){
//     return user.age;
// });

// console.log(names);
// console.log(ages);


const user={
    name:"seyit",
    age:21
};
for(let key in user){
    console.log(key,user[key]);
}






