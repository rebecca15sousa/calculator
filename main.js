const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.Nbtn');
const clearButton = document.querySelector('.Cbtn');
const operButtons = document.querySelectorAll('.Obtn');
const equalsButton = document.querySelector('.Ebtn');
const decButton = document.querySelector('.Dbtn');
const backspaceButton = document.querySelector('.Bbtn');
let res;
let numContent;
let displayContent = "";
let previousKey = "";
let consecutiveOperators = false;
let consecutiveEquals = false;
let firstValue = "";
let secondValue = "";
let operatorValue = "";

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
            //console.log(res);
            break;
        case "Subtract":
            res = subtract(num1, num2).toFixed(2);
            display.textContent = res;
            //console.log(res);
            break;
        case "Multiply":
            res = multiply(num1, num2).toFixed(2);
            display.textContent = res;
            //console.log(res);
            break;
        case "Divide":
            if(num2 == 0) {
                res = "Very funny...Try another number";
                display.textContent = res;
                //console.log(res);
            } else {
                res = divide(num1, num2).toFixed(2);
                display.textContent = res;
                //console.log(res);
            }
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
    } else if(previousKey === "equals") {
        display.textContent = numContent;
        previousKey = "";
    } else {
        display.textContent = displayContent.concat(numContent);
    }
}

function addDecimal() {
    displayContent = display.textContent;
    if(previousKey === "operator") {
        display.textContent = "0.";
        previousKey = "";
        consecutiveOperators = true;
    } else if(previousKey === "equals") {
        display.textContent = "0.";
        previousKey = "";
    } else if(!displayContent.includes(".")) {
        display.textContent = displayContent + ".";
    }
}

function eraseCharacter() {
    displayContent = display.textContent;
    //console.log(displayContent);
    let array = displayContent.split("");
    //console.log(a);
    let popped = array.pop();
    //console.log(b);
    let remain = array.join("");
    //console.log(c);
    display.textContent = remain;
}

function clearDisplay() {
    display.textContent = "0";
    firstValue = "";
    secondValue = "";
    operatorValue = "";
    previousKey = "";
    consecutiveOperators = false;
    consecutiveEquals = false;
}

backspaceButton.addEventListener('click', function() {
    eraseCharacter();
});

clearButton.addEventListener('click', function() {
    clearDisplay();
});

decButton.addEventListener('click', function() {
    consecutiveEquals = false;
    addDecimal();
});

numButtons.forEach(function(Nbtn) {
    Nbtn.addEventListener('click', function() {
        numContent = Nbtn.textContent;
        consecutiveEquals = false;
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
        consecutiveEquals = false;
    });
});

equalsButton.addEventListener('click', function() {
    if(consecutiveEquals == false) {
        displayContent = display.textContent;
        secondValue = displayContent;
        let firstValueNum = Number(firstValue);
        let secondValueNum = Number(secondValue);
        operate(operatorValue, firstValueNum, secondValueNum);
        consecutiveOperators = false;
        consecutiveEquals = true;
        previousKey = "equals";
    }
});