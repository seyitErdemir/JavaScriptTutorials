function addToCart(quantity,productName="defaultDeger"){
    console.log("sepete eklendi    ürün :    "+ productName + "   adet :"+quantity);
}

addToCart("seyit");
addToCart(10);


let  sayHello = ()=>{
    console.log("hello world")
}

sayHello();

let sayHello2 = function(){
    console.log("hello world2")
}
sayHello2();

function addToCart2(productName,quantity,unitPrice) {
    
}



function addToCart3(product) {
    console.log("urun :" + product.productName + "  fiyat :  "+product.unitPrice + "   adet :  "+product.quantity);
}
let product1={ productName:"elma", unitPrice:10,quantity:4 }
    
addToCart3(product1)



let product2={ productName:"elma", unitPrice:10,quantity:4 }
let product3={ productName:"elma", unitPrice:10,quantity:4 }

product2=product3
product2.productName="karpuz"
console.log(product3.productName)



function addToCart4(x) {
    console.log(x)
    
}
let products = [
     {productName:"elma", unitPrice:10,quantity:4},
     {productName:"armut", unitPrice:10,quantity:4},
     {productName:"karpuz", unitPrice:10,quantity:4} 
]

addToCart4(products)



function add(...numbers) { //rest
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
        console.log(total);
        
    }
}
add(20,30)

let numbers=[20,30,40,50,600]
console.log(Math.max(...numbers))



let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"iç anadolu", population:"20m"},
    {name:"marmara", population:"30m"},
    {name:"karadeniz", population:"10m"},
    [
        ["ankara","konya"],
        ["ist","bursa"],
        ["sinop","trabzon"],


    ]
]
console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)


let newProductName ,newUnitPrice,newQuantity
= {productName:newProductName ,unitPrice:newUnitPrice,quantity:newQuantity} ={productName:"elma", unitPrice:10,quantity:4}

console.log(newProductName) 
console.log(newUnitPrice) 
console.log(newQuantity) 