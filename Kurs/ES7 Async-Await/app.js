async function test(data) {
    //async fonksiyonun mutlaka bir promise döndürmesine yarıyor
    //promise ise veri üzerinde işlem olanagı saglıyor
    //  return data;


    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("bu bir degerdir")
        }, 5000)
    })

    //await promise in resolve durumda çalışmasını saglıyor sadecce
    //ve yalnızca async fonksiyonların içerisinde çalışıyor
    let response = await promise;   // promisin resolve dönmesi için 5 sn beklemesi gerek


    return response;

}

// test("merhabass").then(response => console.log(response))




async function testData(data) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === "string") {
                resolve(data)
            } else {
                reject("lütfen string bir deger oluşturunuz")
            }
        }, 5000);
    })

    const response = await promise;


    return response

}

// testData(25)
// .then(data => console.log(data))
// .catch(err => console.log(err))


async function getCurrency(url){
    const response = await fetch(url);
    const data = await response.json()

    return data
}

getCurrency("http://api.exchangeratesapi.io/v1/latest?access_key=2145fc88497a1c7ed1812f0ccd54ae4a")
.then( response => console.log(response))
