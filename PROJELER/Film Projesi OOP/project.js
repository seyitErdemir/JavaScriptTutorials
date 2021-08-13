const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");



//UI objesini başlatma
const ui = new UI();


//tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);

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
        ui.displayMessages("film başarıyla eklendi","success");

    }

    e.preventDefault();
    ui.clearInputs(titleElement,directorElement,urlElement);


}