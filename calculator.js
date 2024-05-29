let displayVal = Number(0);
const display = document.querySelector(".display")
let firstNumb;
let secondNumb;
let operatorOne;
let operatorTwo;
let result;
let btns = document.querySelectorAll("button");

function buttonPress(){
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", () => {
            if(btns[i].classList.contains("numb")){
                inputDigit(btns[i].textContent);
            }
            else if(btns[i].classList.contains("clear")){
                clear();
            }
            else if(btns[i].classList.contains("operator")){
                //inputNumber()
                inputOperator(btns[i].textContent);
            }
            else if(btns[i].classList.contains("equals")){                
                inputEquals();
                //operate(firstNumb, secondNumb, operatorOne);
            }            
        })
    }
}

buttonPress();

function inputDigit(numb) {
    
    if(!operatorOne) {
        if(displayVal === 0) { displayVal = Number(numb); } 
        else if (String(displayVal).length < 9) { 
            if(displayVal == firstNumb) { 
                displayVal = numb; 
            }
            displayVal = displayVal + numb; 
        }              
    } 
    else if(displayVal === firstNumb) {
        if (String(displayVal).length < 9) {
            displayVal = numb;
        }
    } 
    else {
        if (String(displayVal).length < 9) {
            if(isNaN(displayVal)) {
                displayVal = numb;
            } else{
                displayVal = displayVal + numb;
            }
        }
    }
    updateDisplay();
}

function inputOperator(o){     
    
    if(isNaN(displayVal)) { 
        displayVal = firstNumb;
        updateDisplay();
    }
    if(operatorOne && !operatorTwo) { 
        operatorTwo = o;
        secondNumb = displayVal;
        operate(firstNumb, secondNumb, operatorOne);
        displayVal = result;
        
        if(displayVal != "No 0 plz") {
            firstNumb = displayVal;
        }
        result = null;
    } else if(operatorOne && operatorTwo){   
        secondNumb = displayVal;     
        operate(firstNumb, secondNumb, operatorTwo);
        operatorTwo = o;
        displayVal = result;        
        firstNumb = displayVal;
        result = null;

    } else {
        firstNumb = displayVal;
        operatorOne = o;        
    } 
    updateDisplay();   
}

function operate(n1, n2, op){
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
        if(n1 == 0 || n2 == 0){ result = "No 0 plz" }
        else { result = n1 / n2; }
    }
}

function inputEquals(){
    
    if(operatorTwo){
        secondNumb = displayVal;
        operate(firstNumb, secondNumb, operatorTwo)
        displayVal = result;
        if(displayVal != "No 0 plz") {
            firstNumb = displayVal;
            secondNumb = null;
            operatorOne = null;
            operatorTwo = null;
            result = null;
        }
    } else {
        secondNumb = displayVal;
        operate(firstNumb, secondNumb, operatorOne);
        displayVal = result;
        if(displayVal != "No 0 plz") {
            firstNumb = displayVal;
            secondNumb = null;
            operatorOne = null;
            operatorTwo = null;
            result = null;
        }
    }
    updateDisplay();
    displayVal = firstNumb;
}

function updateDisplay() {
    display.textContent = displayVal;
}

function clear() {
    displayVal = 0;
    firstNumb = null;
    secondNumb = null;
    operatorOne = null;
    operatorTwo = null;
    result = null;
    updateDisplay();
}