const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/albums")
    .then(function (response) {
      data = response.data;
     
      res.send(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
