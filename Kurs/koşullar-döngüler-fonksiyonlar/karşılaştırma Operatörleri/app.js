//karşılaştırma operatörleri
// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

console.log(2 == 2);
console.log("js" == "javasdac");
console.log(2 == "2");
console.log(2 === "2");

console.log(4 > 2);
console.log(2 > 4);
console.log(4 != 4);

console.log(4 >= 2);
console.log(4 <= 2);

//mantıksal baglaçlar
//not operatörü
console.log(!(2 == 2));

//and operatarü
console.log((2 == 2) && ("ahmet" == "ahmet"));

//or operatörü
console.log((4 == 2) || ("ahmet" == "ahmet"));

console.clear();

if (2 == 2) {
    console.log("birbirine eşit");
} else {
    console.log("birbirine eşit degil");

}
const user = "mmc";
if (user == "mmc") {
    console.log("kullanıcı bulundu");
} else {
    console.log("kullanıcı bulunmadı");
}

const process = "1";
if (process === "1") {
    console.log("1");
} else if (process === "2") {
    console.log("2");

} else if (process === "3") {
    console.log("3");

} else {
    console.log("bulunamadı");

}

const number = 100;
if (number === 100) {
    console.log("sayı 100");
} else {
    console.log("sayı 100 degil");
}

//ternary  oparator
console.log(number === 100 ? "sayi:100" : "sayi 100 degil");

const pro = 3;
switch (pro) {
    case 1:
        console.log("işlem1")
        break;

    case 2:
        console.log("işlem2")
        break;

    default:
        console.log("işlem geçersiz")

}