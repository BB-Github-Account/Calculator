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
                inputOperator(btns[i].textContent);
            }
            else if(btns[i].classList.contains("equals")){                
                operate(firstNumb, secondNumb, firstOperator);
            }
            else if(btns[i].classList.contains("backspace")){
                
            }
        })
    }
}

buttonPress();

function inputNumber(numb) {
    
    if(displayVal === 0) { displayVal = Number(numb); }
    else if(displayVal == "+" || displayVal == "-" || displayVal == "*" || displayVal == "/") { 
        displayVal = numb;
    }
    else if (String(displayVal).length < 9) { 
        displayVal = displayVal + numb; 
    }
    updateDisplay();
}

function inputOperator(o){ 
    if(!firstNumb){
        firstNumb = Number(displayVal);
    } else if(!secondNumb) {
        secondNumb = Number(displayVal);
    } else {
        firstNumb = Number(firstNumb) + Number(secondNumb);
        secondNumb = null;
    }
    firstOperator = o;
    displayVal = o;
    updateDisplay();
}

function operate(n1, n2, op){
    
    if(!n2){ n2 = displayVal;}

    if(op == "+") {
        result = Number(n1) + Number(n2);
    }
    else if(op == "-") {
        result = n1 - n2;
    }
    else if(op == "*") {
        result = n1 * n2;
    }
    else if(op == "/") {
        result = n1 / n2;
    }

    firstNumb = null;
    displayVal = result;
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