const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

 
//tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=Storage.getFilmsFromStorage();

        UI.loadAllFilms(films);
    });
    
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);

}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url=urlElement.value; 

    if (title ===""|| director===""|| url==="") {
        //hata mesajı
        UI.displayMessages("tüm alanları doldurunuz","danger");
    }else{
        //yeni film
        const newFilm=new Film(title,director,url);
        UI.addFilmToUI(newFilm); //arayüze film ekleme
        Storage.addFilmToStorage(newFilm);//storage a film ekleme
        UI.displayMessages("film başarıyla eklendi","success");

    }

    e.preventDefault();
    UI.clearInputs(titleElement,directorElement,urlElement);


}

function deleteFilm(e){
  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
      Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    
      UI.displayMessages("Silme işlemi başarılı ... ","success");
  }
}

function clearAllFilms(e){
    if (confirm("Eminmisiniz ")) {
        UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage(); 
    UI.displayMessages(" Tüm Filmleri Silme işlemi başarılı ... ","success");    
}
   
}
