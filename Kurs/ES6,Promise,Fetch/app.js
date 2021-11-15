 function getData(data){
    return new Promise(function(resolve,reject){

      setTimeout(function(){

        if (typeof data==="string") {
            //olumlu
            resolve(data)
        }else  {
            //olumsuz
            reject(new Error("lütfen string bir deger giriniz"))
        }

      },5000)  
      

    })
 }



//  getData(5).then(function(response){
//      console.log("gelen deger : "+ response)
//  }).catch(function(err){
//     console.error(err)
//  })
 
// getData(24)
// .then(response => console.log("gelen deger : "+ response) )
// .catch( err => console.error(err) )


function addTwo(number){

    return new Promise( (resolve, reject) =>{
        setTimeout(function(){
            if (typeof number ==="number") {
                resolve(number+2)
            }else{
            reject(new Error("lütfen bir sayi giriniz"))
                
            }
        },2000)
    })

}

addTwo("seyit").then(response =>{
    console.log(response) 
    return response+2
}).then(response2=>     console.log(response2) )
.catch(err =>  console.error(err))


//1 tane catch bşrden cok then kullanabiliri
 