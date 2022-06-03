$(document).ready(onReady);


function onReady(){
    console.log('jquery loaded');
    
    $(document).on(`click`, `.operatorBtn`, getOperator);
    $(document).on(`click`, `#calculateBtn`, operatorField);
    $(document).on(`click`, `.clearBtn`, clearInfo);
    
    
    getCalculation();
    
}

let operator;  
function getOperator(){
    operator = $(this).data("operator");
    console.log('in our operator', operator);
}

function operatorField(){
    console.log("in addCalculation");
    if (
        $(`#valueOne`) === "" ||
        $(`#valueTwo`) === "" ||
        operator === undefined
        ) {
            alert("failed to add operators");
            return false;
        } else {
            let newOutput = {
                valueOne: $(`#valueOne`).val(),
                operator: operator,
                valueTwo: $(`#valueTwo`).val(),
                solution: null,
            }; 
            console.log('send this to', newOutput);
            $(`#valueOne`).val("");
            $(`#valueTwo`).val("");
            operator = undefined; 
            $.ajax({
                method: `POST`, 
                url: "/calculation", 
                data: newOutput, 
            })
            .then(function (response) {
                console.log('bingooo', response);
                getCalculation(); 
            })
            .catch(function (err) {
                alert('error miss girl');
                console.log(err); 
            });
        }
    }
    // end of Post
    
    function getCalculation(){
        $(`#calculatorHistory`).empty();
        $.ajax({
            type: `GET`,
            url: `/calculator`,
        })
        .then(function (response) {
            console.log('get function', response);
            for (let item of response) {
                $(`#answerField`).empty();
                $(`#answerField`).append(`
                ${item.solution}
                `);
            }
            for (let i = 0; i < response.length; i++) {
                let item = response[i];
                $("#calculatePast").prepend(`
                <li>
                ${item.valueOne}
                ${item.operator}
                ${item.valueTwo}
                =
                ${item.solution}
                </li>
                `);
            }
        })
        .catch(function (err) {
            console.log(err);
            alert('error in get');
        });
    } // end of GET
    
    
    
    function clearInfo(){
        console.log('clear works!');
        $(`#valueOne`).val('');
        $(`#ValueTwo`).val('');
        operator = undefined;
        $(`#answerField`).empty();
    } // end of clear function
    
    