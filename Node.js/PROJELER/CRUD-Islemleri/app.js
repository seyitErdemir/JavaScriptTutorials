const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Worldsss');
});

app.get('/:id', (req, res) => {
  res.send('Hello Worldsss' 
  + req.params.id);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


// const express = require('express')
// const mainRoute = require('./routes/mainRoute')

// const app = express()
// const port = 3000

// app.set('view engine', 'ejs')

// app.use(express.static('public'))
// app.use('/', mainRoute)


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


