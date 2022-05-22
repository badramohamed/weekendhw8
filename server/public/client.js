$(document).ready(onReady);


function onReady(){
console.log('jquery loaded');

$('#equalsBtn').on('click', getInput);
$('#clearBtn').on('click', clearInput);
$('.operator').on('click',operatorField); 

getCalculation();

}
function clearInput(){
    $('#valueOne').val(''),
    $('#valueTwo').val('')

}
let operator = ''; 
// to target the operator buttons 

function operatorField(){
operator=$(this).text();
}

function getInput(){
    if($('#valueOne').val() === '' || $('#valueTwo').val() === '') return;
    let obejectsThrough= {
        valueOne: Number($('#valueOne').val()),
        valueTwo: Number($('#valueTwo').val()),
        operator: operator, 
        answer: ''
    } 
console.log('in the getInput',obejectsThrough)
    $.ajax({
    type: 'POST',
    url: '/calculation', 
    data: obejectsThrough
 }).then(function(response){
     console.log(response); 
     getCalculation(); 
 }).catch(function(err){
     alert('woah!error! try again later');
     console.log(err);
 })

}

function getCalculation(){
$.ajax({
    type: 'GET',
    url: '/calculation'
}).then( function( response ){
    console.log(response)
    // appendToDom;
    let el = $( '#calculatePast' );
    el.empty();
    // loop through my responsees
 for( let i = 0; i < response.length; i++){
        // display each item on DOM
        el.append( `
        <li>${response[i].valueOne} ${response[i].operator} ${response[i].valueTwo} = ${response[i].answer}</li>
        `)
} 
let answer =$('#answerField');
answer.empty();
 if(response.length === 0){
    return false;
 }else{
    answer.append(`${response[0].answer}`)
}

//appendToDom();
}).catch( function( err ){
    alert( 'error getting calculation try again later' );
    console.log( err );
})

}
