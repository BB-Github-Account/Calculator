let displayVal = Number(0);
const display = document.querySelector(".display")
let firstNumb;
let secondNumb;
let firstOperator;
let secondOperator;
let result;
let btns = document.querySelectorAll("button");

function buttonPress(){
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", () => {
            if(btns[i].classList.contains("numb")){
                inputNumber(btns[i].textContent);
            }
            else if(btns[i].classList.contains("clear")){
                clear();
            }
            else if(btns[i].classList.contains("operator")){
                inputOperator(btns[i].innerText);
            }
            else if(btns[i].classList.contains("equals")){
                
            }
            else if(btns[i].classList.contains("backspace")){
                
            }
        })
    }
}

buttonPress();

function inputNumber(numb) {

    if(displayVal === 0) { displayVal = Number(numb); }
    else if (String(displayVal).length < 9) { 
        displayVal = displayVal + numb; 
    }
    updateDisplay();
}

function inputOperator(o){
    displayVal = o;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = displayVal;
}

function clear() {
    displayVal = 0;
    firstNumb = null;
    secondNumb = null;
    firstOperator = null;
    secondOperator =null;
    result = null;
    updateDisplay();
}