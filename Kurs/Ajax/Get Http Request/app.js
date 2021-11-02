 //ajax ü callback , http requets

 class Request{
    constructor(){
      this.xhr =new XMLHttpRequest();

    }

    get(url,callback){
       this.xhr.open("GET",url) //bağlantı açık
       
         this.xhr.onload = () =>{
            if (this.xhr.status === 200) {
               callback(null,this.xhr.responseText);//istek bitti
            }else{
               callback("herhangi bir hata oluştu",null)
            }
         }



      this.xhr.send();

    
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
 



//   request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//       if (err===null) {
//          //başarılı 
//          console.log(response)
//       }else{
//          console.log(err);
//       }
//   });




