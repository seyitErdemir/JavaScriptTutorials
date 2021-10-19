const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//UI objesini başlatma
const ui = new UI();
 
//storage objesi üret 
const storage =new Storage();

//tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=storage.getFilmsFromStorage();

        ui.loadAllFilms(films);
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
        ui.displayMessages("tüm alanları doldurunuz","danger");
    }else{
        //yeni film
        const newFilm=new Film(title,director,url);
        ui.addFilmToUI(newFilm); //arayüze film ekleme
        storage.addFilmToStorage(newFilm);//storage a film ekleme
        ui.displayMessages("film başarıyla eklendi","success");

    }

    e.preventDefault();
    ui.clearInputs(titleElement,directorElement,urlElement);


}

function deleteFilm(e){
  if (e.target.id === "delete-film") {
      ui.deleteFilmFromUI(e.target);
      storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    
      ui.displayMessages("Silme işlemi başarılı ... ","success");
  }
}

function clearAllFilms(e){
    if (confirm("Eminmisiniz ")) {
        ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage(); 
    ui.displayMessages(" Tüm Filmleri Silme işlemi başarılı ... ","success");    
}
   
}
