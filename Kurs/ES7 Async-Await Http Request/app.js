class Request {


    async get(url) {

        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err))
        // })


        const response = await fetch(url); //response objesini elde edeniliriz
        const data = await response.json()
        return data


    }


    async post(url, data) {

        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: 'POST',
        //         body: JSON.stringify(data),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //         },

        //     })
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err))
        // })


        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })  // response objesi gelioyr

        const responseData = await response.text()
        return responseData
    }

    async put(url, data) {

        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: 'PUT',
        //         body: JSON.stringify(data),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //         }
        //     })
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err))
        // })


        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })

        const responseData = await response.json()
        return responseData


    }

    async delete(url) {

        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: 'delete'
        //     })
        //         .then(response => resolve("veri silme işlemi başarılı"))
        //         .catch(err => reject(err))
        // })


        const response = await fetch(url, {
            method: 'delete'
        })

        // const data = await response.json()
        return "veri silme işlemi başarılı"
    }

}


const request = new Request()


// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => {
//     console.log(albums)
// })
// .catch( err => console.log(err))



request.post("https://jsonplaceholder.typicode.com/albums", { userId: 5, title: "seyit" })
    .then(newAlbum => console.log(newAlbum))
    .catch(err => console.log(err))



request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "seyitsss" })
    .then(updateAlbums => console.log(updateAlbums))
    .catch(err => console.log(err))

request.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(message => console.log(message))
    .catch(err => console.log(err))

