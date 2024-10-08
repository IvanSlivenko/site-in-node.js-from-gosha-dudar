const fs = require('fs');
const express = require('express');

// fs.writeFileSync('info.txt', 'test text');

const app = express();

let PORT = 3001;

app.get('/', function (req, res) {
    // res.send(__dirname + '/templates/index.html');
    res.sendFile(__dirname + '/templates/index.html');

    // res.end();
  })

  app.get('/about', function (req, res) {
    // res.send('About express');
    res.sendFile(__dirname + '/templates/about.html');
    // res.end();
  })  
  
  app.listen(PORT , ()=>{
    console.log(`Старт сервера відбувся : http://localchost:${PORT}`);
    
  })
