

const express = require ('express');
const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>{
  console.log('server back connected');
})

app.get( '/', (req, res) => {
  res.send('Immo server');
})

app.get('/back', (req, res) => {
  res.send('bienvenue dans les BACKS!!!!!!!!!!!')
})
