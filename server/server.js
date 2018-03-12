const express = require ('express');
const bodyParser = require('body-parser')



var { mongoose } = require('./db/mongoose');
var { Appart } = require('./db/models/Appart');


const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>{
  console.log('server back connected');
})

app.post('/apparts', (req, res) => {
  var newAppart = new Appart(req.body);
  newAppart.save()
  .then((doc)=>res.send(doc),
(e)=>{res.status(400).send(e)});
})

app.get('/apparts', (req, res)=>{
  Appart.find()
  .then(
    (apparts)=>{
      res.send({apparts})
  },
  (e)=>{
    res.status(400).send(e)
  })
});
