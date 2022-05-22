const calculation= [];

$(document).ready(onReady);


function onReady(){
console.log('jquery loaded');

$('#add').on('click', additionField);
$('#subtract').on('click', subtractField); 
$('#multiply').on('click', multiplyField); 
$('#divide').on('click', divideField);
$('#equalsBtn').on('click', equalsWhat);
$('#clearBtn').on('click', ClearField);

}

function additionField(){
let additionField = {
    inputOne: $('#valueOne').val(),
    operator: '+', 
    inputTwo: $('#valueTwo').val(),
};
console.log( 'additionField:', additionField);
calculation.push(additionField)
}

function subtractField(){
    let subtractField= {
        inputOne: $('#valueOne').val(), 
        operator: '-', 
        inputTwo: $('#valueTwo').val(),
}; 
console.log('subtractField', subtractField);
calculation.push(subtractField)
}
function divideField(){
    let divideField= {
        inputOne: $('#valueOne').val(), 
        operator: '/', 
        inputTwo: $('#valueTwo').val(),
}; 
console.log('divideField', divideField);
calculation.push(divideField)
}
function multiplyField(){
    let multiplyField= {
        inputOne: $('#valueOne').val(), 
        operator: '*', 
        inputTwo: $('#valueTwo').val(),
}; 
console.log('multiplyField:', multiplyField);
calculation.push(multiplyField)
}
function equalsWhat (){
   event.preventDefault();
    let equalsWhat = {
        inputOne: $('#valueOne').val(),
        operator: '=', 
        inputTwo: $('#valueTwo').val(),
    }
        console.log('equal field:', equalsWhat);
        calculation.push(equalsWhat)
    }
    function ClearField (){
    event.preventDefault();
        let ClearField = {
            inputOne: $('#valueOne').val(),
            operator: 'C', 
            inputTwo: $('#valueTwo').val(),
        }
            console.log('clear field:', ClearField);
            calculation.push(ClearField)
}





