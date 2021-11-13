let cart = [
    { id: 1, productName: "telefon", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "bardak", quantity: 2, unitPrice: 30 },
    { id: 3, productName: "kalem", quantity: 1, unitPrice: 20 },
    { id: 4, productName: "şarj cihazı", quantity: 5, unitPrice: 100 },
    { id: 5, productName: "kitap", quantity: 4, unitPrice: 30 },
    { id: 6, productName: "pot", quantity: 6, unitPrice: 150 },

]

console.log("<ul>")


let total = cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)
console.log(total)



let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)

cart.map(product => {
    console.log("<li>" + product.productName + "   :  " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")









function addToCard(sepet) {  //buradaki referans tip 
    sepet.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 })
}
addToCard(cart)
console.log(cart)

//referans tip adresi  primitive tip degişkeni kaynak alır
//bu sebepteden referans tiplerde yapılan degişiklikler o an görülürken primitive tiplerde görünmez

let sayi = 10
function sayiTopla(number) {  //buradaki primitive tip 
    number += 1
}
sayiTopla(sayi)
console.log(sayi)