const fs = require('fs');
const express = require('express');

// fs.writeFileSync('info.txt', 'test text');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './templates');
app.use(express.static('public'));

let PORT = 3001;

app.get('/', function (req, res) {
    res.render('index', {name:"Ivan", id: 4});

  })

  app.get('/about', function (req, res) {
    res.render('about');  
  }) 
  
  app.get('/blog', function (req, res) {
    res.render('blog');  
  }) 
  
  app.listen(PORT , ()=>{
    console.log(`Старт сервера відбувся : http://localhost:${PORT}`);
    
  })
