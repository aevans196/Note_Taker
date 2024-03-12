const express = require('express');
const path = require('path');
const { middlewear } = require('./middlewear/middlewear.js');
const api = require('./public/assets/js/index.js');

const PORT = process.env.port || 3001;

//runs the express function
const app = express();

app.use(middlewear);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

//HTML routes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

//API route to GET 
app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './db/db.json'))
);

//API route to POST
app.post('/api/notes', (req, res) =>
  res.readAndAppend(path.json(__dirname, './db/db.json'))
);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);