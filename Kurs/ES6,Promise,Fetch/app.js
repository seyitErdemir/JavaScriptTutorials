 function getData(data){
    return new Promise(function(resolve,reject){

      setTimeout(function(){

        if (typeof data==="string") {
            //olumlu
            resolve(data)
        }else  {
            //olumsuz
            reject("lütfen string bir deger giriniz")
        }

      },5000)  
      

    })
 }



 getData("merhaba").then(function(response){
     console.log("gelen deger : "+ response)
 }).catch(function(err){

    console.log(err)

 })
 

 