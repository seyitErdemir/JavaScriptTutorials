function Storage() {

}
Storage.prototype.addFilmToStorage = function (newFilm) {
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    /**   lacal storage e string deger degilde  obje atıyoruz */

    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.getFilmsFromStorage = function () {
    let films;

    if (localStorage.getItem("films") === null) {
        films = [];
    } else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;

}

Storage.prototype.deleteFilmFromStorage = function (filmTitle) {
    let films = this.getFilmsFromStorage();
    films.forEach(function (film, index) {
        if (film.title === filmTitle) {
            films.splice(index, 1);
        }
    });
    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function() {
    localStorage.removeItem("films");
}


