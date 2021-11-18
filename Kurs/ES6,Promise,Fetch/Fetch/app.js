function getTextFile(){
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch( err => console.log(err))
}

getTextFile();