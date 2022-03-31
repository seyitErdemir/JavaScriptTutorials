// setTimeout(()=> {
//     console.log("Merhaba")
// } , 2000)

// setInterval(()=>{
//     console.log("Her saniye çalışıyorum")
// } , 1000)

// const sayHi = (cb) => {
//     cb()
// }
// sayHi( () =>{
//     console.log("hello")
// } )

// import fetch from 'node-fetch';
import axios from 'axios';

// fetch('https://jsonplaceholder.typicode.com/users').then(data => {
//   console.log(data)
// })

(async () => {
  const users = await axios('https://jsonplaceholder.typicode.com/users')

  console.log(users)
})()
