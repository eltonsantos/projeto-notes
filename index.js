const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();
const port = 8000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home')
  //res.send("Está funcionando")
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})