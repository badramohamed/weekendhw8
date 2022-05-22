const express= require('express');
const bodyParser= require('body-parser');

const app= express();
const PORT=5000
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

const calcultion = [];


function Whatcalculation(){
    if(calculation[0].operator === '+'){
        calculation[0].answer = (Number(calculation[0].valueOne)) + (Number(calculation[0].valueTwo));
    }else if(calculation[0].operator === '-'){
       calculation[0].answer = (Number(calculation[0].valueOne)) - (Number(calculation[0].valueTwo));
    }else if(calculation[0].operator === '/'){
       calculation[0].answer = (Number(calculation[0].valueOne)) / (Number(calculation[0].valueTwo));
    }else if(calculation[0].operator === '*'){
       calculation[0].answer = (Number(calculation[0].valueOne)) * (Number(calculation[0].valueTwo));
    }
}






app.get('/calculation', (req,res) => {
    console.log('in /calculation GET');
    res.send(calcultion)
});

app.post('/calculation', (req, res)=> {
    console.log('in /calculation POST:', req.body);
    calcultion.unshift(req.body); 
    Whatcalculation();
    res.sendStatus(201);
})







app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })