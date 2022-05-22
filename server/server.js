const express= require('express');
const bodyParser= require('body-parser');

const app= express();
const PORT=5000
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

const calcultion = []



app.get('/calculation', (req,res) => {
    console.log('in /calculation GET');
    res.send(calcultion)
});

app.post('/calculation', (req, res)=> {
    console.log('in /calculation POST:', req.body);
})







app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })