// setup access to HTML Elements
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

// add listeners to all buttons
buttons.forEach(
    function(button){
        button.addEventListener('click', calculate);
    }
);

//calculate function - event handler fo all buttons
function calculate(event){
    // what button was clicked?
    const clickedValue = event.target.value;

    //check if = sign was clicked
    if(clickedValue === '='){
        //check if display is empty
        if(display.value !== ''){
            //calculate and show result
            display.value = eval(display.value);
        }
    } else if(clickedValue === 'c'){
        //clear display
        display.value = '';
    }else{
        //concatenate clicked button value to display
        display.value += clickedValue;
    }
}