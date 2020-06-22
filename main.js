const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.Nbtn');
const clearButton = document.querySelector('.Cbtn');
const operButtons = document.querySelectorAll('.Obtn');
const equalsButton = document.querySelector('.Ebtn');
const decButton = document.querySelector('.Dbtn');
let res;
let numContent;
let displayContent = "";
let previousKey;
let consecutiveOperators = false;
let firstValue;
let secondValue;
let operatorValue;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "Add":
            res = add(num1, num2).toFixed(2);
            display.textContent = res;
            console.log(res);
            break;
        case "Subtract":
            res = subtract(num1, num2).toFixed(2);
            display.textContent = res;
            console.log(res);
            break;
        case "Multiply":
            res = multiply(num1, num2).toFixed(2);
            display.textContent = res;
            console.log(res);
            break;
        case "Divide":
            /*if(num2 == 0) {
                display.textContent = "Very funny...Try another number";
            }*/
            res = divide(num1, num2).toFixed(2);
            display.textContent = res;
            console.log(res);
            break;
        default:
            return "ERROR"
    }
}

function addNumber() {
    displayContent = display.textContent;
    if(displayContent === "0") {
        display.textContent = numContent;
    } else if(previousKey === "operator") {
        display.textContent = numContent;
        previousKey = "";
        consecutiveOperators = true;
    } else {
        display.textContent = displayContent.concat(numContent);
    }
}

function addDecimal() {
    displayContent = display.textContent;
    if(!displayContent.includes(".")) {
        display.textContent = displayContent + ".";
    } else if(previousKey === "operator") {
        display.textContent = "0.";
        previousKey = "";
    }
}

function clearDisplay() {
    display.textContent = "0";
    firstValue = "";
    secondValue = "";
    operatorValue = "";
}

clearButton.addEventListener('click', function() {
    clearDisplay();
});

decButton.addEventListener('click', function() {
    addDecimal();
});

numButtons.forEach(function(Nbtn) {
    Nbtn.addEventListener('click', function() {
        numContent = Nbtn.textContent;
        addNumber();
    });
});

operButtons.forEach(function(Obtn) {
    Obtn.addEventListener('click', function() {
        if(consecutiveOperators == true) {
            displayContent = display.textContent;
            secondValue = displayContent;
            let firstValueNum = Number(firstValue);
            let secondValueNum = Number(secondValue);
            operate(operatorValue, firstValueNum, secondValueNum);
            consecutiveOperators = false;
        }
        operatorValue = Obtn.dataset.action;
        displayContent = display.textContent;
        firstValue = displayContent;
        previousKey = "operator";
    });
});

equalsButton.addEventListener('click', function() {
    displayContent = display.textContent;
    secondValue = displayContent;
    let firstValueNum = Number(firstValue);
    let secondValueNum = Number(secondValue);
    operate(operatorValue, firstValueNum, secondValueNum);
    consecutiveOperators = false;
});