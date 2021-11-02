//ajax ü callback , http requets

class Request {
   constructor() {
      this.xhr = new XMLHttpRequest();

   }

   get(url, callback) {
      this.xhr.open("GET", url) //bağlantı açık

      this.xhr.onload = () => {
         if (this.xhr.status === 200) {
            callback(null, this.xhr.responseText);//istek bitti
         } else {
            callback("herhangi bir hata oluştu", null)
         }
      }

      this.xhr.send();


   }


   post(url, data, callback) {

      this.xhr.open("POST", url);
      this.xhr.setRequestHeader("Content-type", "application/json")//json verisi gönderecegini söylüyoruz
      this.xhr.onload = () => {
         if (this.xhr.status === 201) {
            //başarılı durum
            callback(null, this.xhr.responseText);
         } else {
            callback("herhangi bir hata oluşut", null);
         }
      }
      this.xhr.send(JSON.stringify(data));

   }

   put(url, data, callback) {

      this.xhr.open("PUT", url);
      this.xhr.setRequestHeader("Content-type", "application/json")//json verisi gönderecegini söylüyoruz
      this.xhr.onload = () => {
         if (this.xhr.status === 200) {
            //başarılı durum
            callback(null, this.xhr.responseText);
         } else {
            callback("PUT request herhangi bir hata oluşut", null);
         }
      }
      this.xhr.send(JSON.stringify(data));

   }
}

const request = new Request();

//   request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//       if (err===null) {
//          //başarılı 
//          console.log(response)
//       }else{
//          console.log(err);
//       }
//   });








// request.get("https://jsonplaceholder.typicode.com/albums/51", function (err, response) {
//    if (err === null) {
//       //başarılı 
//       console.log(response)
//    } else {
//       console.log(err);
//    }
// });




// request.post("https://jsonplaceholder.typicode.com/albums",{  userId : 5,title:"seyit"},function(err,album){
//          if(err === null){
//             console.log(album);

//          }else{
//             console.log(err);
//          }
// })




request.put("https://jsonplaceholder.typicode.com/albums/10",{  userId : 14445,title:"seyit"},function(err,album){
         if(err === null){
            console.log(album);

         }else{
            console.log(err);
         }
})