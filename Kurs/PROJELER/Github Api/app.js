//elementleri seçme
const githubForm= document.getElementById("github-form")
const nameInput = document.getElementById("githubname")
const clearLastUsers =document.getElementById("clear-last-users")
const lastUsers=document.getElementById("last-users")
const github = new Github
const ui=new UI


eventListeners()

function eventListeners(){
    githubForm.addEventListener("submit",getData)
    clearLastUsers.addEventListener("click",clearAllSearched)
    document.addEventListener("DOMContentLoaded",getAllSearched)

}

function getData(e){
    let userName = nameInput.value.trim()
    if (userName==="") {
        alert("lütfen geçerli bi kullanıcı adı giriniz")
        
    }else {
       github.getGithubData(userName)
       .then(response =>{
           if (response.user.message ==="Not Found") {
               //Hata Mesajı
               console.log("Hata")
           }else{
              ui.showUserInfo(response.user)
           }
       })
       .catch(err => console.log(err))
       


    }



    ui.clearInput() //input temizleme 
    e.preventDefault()

}
function clearAllSearched(){
    //tüm arananları temizle
}
function getAllSearched(){
 //arananları strogedan al ui a ekle   
}