const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.Nbtn');
const clearButton = document.querySelector('.Cbtn');
const operButtons = document.querySelectorAll('.Obtn');
const equalsButton = document.querySelector('.Ebtn');
let res;
let numContent;
let displayContent;
let previousKey;
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
            res = add(num1, num2);
            //displayContent = res;
            display.textContent = res;
            console.log(res);
            break;
        case "Subtract":
            res = subtract(num1, num2);
            //displayContent = res;
            display.textContent = res;
            console.log(res);
            break;
        case "Multiply":
            res = multiply(num1, num2);
            //displayContent = res;
            display.textContent = res;
            console.log(res);
            break;
        case "Divide":
            res = divide(num1, num2);
            //displayContent = res;
            display.textContent = res;
            console.log(res);
            break;
        default:
            return "ERROR"
    }
}

function populateDisplay() {
    displayContent = display.textContent;
    if(displayContent === "0" || previousKey === "operator") {
        display.textContent = numContent;
        //displayContent = display.textContent;
        previousKey = "";
    } else {
        display.textContent = displayContent.concat(numContent);
        //displayContent = display.textContent;
    }
}

function clearDisplay() {
    display.textContent = "0";
}

clearButton.addEventListener('click', function() {
    clearDisplay();
});

numButtons.forEach(function(Nbtn) {
    Nbtn.addEventListener('click', function() {
        numContent = Nbtn.textContent;
        populateDisplay();
    });
});

operButtons.forEach(function(Obtn) {
    Obtn.addEventListener('click', function() {
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
})