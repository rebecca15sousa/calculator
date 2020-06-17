const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.Nbtn');
const clearButton = document.querySelector('.Cbtn');
let numContent;
let displayContent;

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
    let res;

    switch(operator) {
        case "Add":
            res = add(num1, num2);
            console.log(res);
            break;
        case "Subtract":
            res = subtract(num1, num2);
            console.log(res);
            break;
        case "Multiply":
            res = multiply(num1, num2);
            console.log(res);
            break;
        case "Divide":
            res = divide(num1, num2);
            console.log(res);
            break;
        default:
            return "ERROR"
    }
}

function populateDisplay() {
    displayContent = display.textContent;
    if(displayContent === "0") {
        display.textContent = numContent;
    } else {
        display.textContent = displayContent.concat(numContent);
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