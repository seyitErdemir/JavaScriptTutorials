function getTextFile(){ // text dosyasından alma
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch( err => console.log(err))
}

getTextFile();


function getJsonFile(){  //json dosyasından veri  alma
    fetch("example.json")
    .then(response => response.json())
    .then( data => console.log(data) )
    .catch(err => console.log(err))


}

getJsonFile()


function getExternalAPI(){
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=2145fc88497a1c7ed1812f0ccd54ae4a")
    .then(response => response.json())
    .then(data => {{
        console.log(data.rates.TRY)
    }})
    .catch(err => console.log(err))
}

getExternalAPI()