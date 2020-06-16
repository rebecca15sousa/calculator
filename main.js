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
