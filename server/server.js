const express= require('express');
const bodyParser= require('body-parser');

const app= express();
const PORT=5000

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

let calculation = [];

app.get( '/calculator', (req, res ) => { 
    console.log('works in GET'); 
    res.send( calculation )
})

app.post( '/calculation', (req, res) => {
    console.log(req.body);
    let request = req.body; 
    if (request.operator === '+') { 
    request.solution = Number(request.valueOne) + Number(request.valueTwo);
    } 
    else if (request.operator === "-") {
    request.solution = Number(request.valueOne) - Number(request.valueTwo);
    }
    else if (request.operator === "*") {
    request.solution = Number(request.valueOne) * Number(request.valueTwo);
    }
    else if (request.operator === "/") {
        request.solution = Number(request.valueOne) / Number(request.valueTwo);    
    }
    console.log('post updates', request);
    calculation.push(request); 
    res.sendStatus(200); 
   }) // end post





app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })