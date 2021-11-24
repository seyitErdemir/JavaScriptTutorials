//PRototype ,Ajax , Callback

eventListeners()


function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateWord)
    //change
    document.getElementById("language").onchange = function () {
        //arayüz işlemleri gerçekleşecek
        console.log("evet")
        ui.changeUI()

    }

}

const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value)
const ui=new UI()

function translateWord(e) {

    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value)
    translate.translateWord(function(err,response){
        if (err===null) {
            ui.displayTranslate(response)
        }else{
            console.log(err)
        }
    })

    e.preventDefault()

}