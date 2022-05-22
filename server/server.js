const express= require('express');
const bodyParser= require('body-parser');

const app= express();
const PORT=5000

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

const myCalcultion = [];


function Whatcalculation(){
    if(myCalcultion[0].operator === '+'){
        myCalcultion[0].answer = (Number(myCalcultion[0].valueOne)) + (Number(myCalcultion[0].valueTwo));
    }else if(myCalcultion[0].operator === '-'){
        myCalcultion[0].answer = (Number(myCalcultion[0].valueOne)) - (Number(myCalcultion[0].valueTwo));
    }else if(myCalcultion[0].operator === '/'){
        myCalcultion[0].answer = (Number(myCalcultion[0].valueOne)) / (Number(myCalcultion[0].valueTwo));
    }else if(myCalcultion[0].operator === '*'){
        myCalcultion[0].answer = (Number(myCalcultion[0].valueOne)) * (Number(myCalcultion[0].valueTwo));
    }
}






app.get('/calculation', (req,res) => {
    console.log('in /calculation GET');
    res.send(myCalcultion);
});

app.post('/calculation', (req, res)=> {
    console.log('in /calculation POST:', req.body);
    myCalcultion.unshift(req.body); 
    Whatcalculation();
    res.sendStatus(201);
})







app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })