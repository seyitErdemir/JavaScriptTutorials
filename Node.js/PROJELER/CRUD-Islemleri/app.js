const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  try {

    let url = 'http://localhost:3001/products'



      function getProducts(url) {
      console.log(url);
 
      let response =   fetch(url);

      if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json =   response.json();

        res.send(
          json
        )

      } else {
        alert("HTTP-Error: " + response.status);
      }


    }

    
    
    return fetch(url)
      .then(response => response.json())
      .then(result => result)
  

   
  } catch (error) {
    res.send(
      "Hata Mesajıs"
    ) 
  }
}


  
);

app.get("/:id", (req, res) =>
  res.send(
    req.params.id
  )
);

app.listen(port, () =>
  console.log(`Example app listensdsing on port ${port}!`)
);

// const express = require('express');

// // Constants
// const PORT = 3000;
// const HOST = '0.0.0.0';

// // App
// const app = express();

// app.get('/', (req, res) => res.send('Node.js local development on Docker container and Nodemon work!'))

// app.get('/:id', (req, res) => {
//     res.send('Hello Worldsss' + req.params.id);
// });

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// const express = require('express')
// const mainRoute = require('./routes/mainRoute')

// const app = express()
// const port = 3000

// app.set('view engine', 'ejs')

// app.use(express.static('public'))
// app.use('/', mainRoute)

// app.listen(port, () => {
// console.log(`Example app listening on port ${port}`)
// })
