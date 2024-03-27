function addToDisplay(value) {
    let display = document.getElementById('display')
    let lastCharIsOperator = display.value.length > 0 && ['/', '*', '-', '+'].includes(display.value.slice(-1));
    let isOperator = ['/', '*', '-', '+'].includes(value);
    if (lastCharIsOperator && isOperator) {
        return;
    }

    display.value += value;
}

function simulateBackspace() {
    let inputElement = document.getElementById("display");
    let currentValue = inputElement.value;
    if (currentValue.length > 0) {
        inputElement.value = currentValue.substring(0, currentValue.length - 1);
    }
}

document.getElementById("display").addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        event.preventDefault();
        simulateBackspace();
    }
});

function validateInput(input) {
    input.value = input.value.replace(/[^0-9+\-*/]/g, '');
    let lastCharIsOperator = input.value.length > 0 && ['/', '*', '-', '+'].includes(input.value.slice(-1));
    let isOperator = ['/', '*', '-', '+'].includes(value);
    if (lastCharIsOperator && isOperator) {
        return;
    }
    input.value += value
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    if (expression) {
        try {
            document.getElementById('display').value = eval(expression);
        } catch (error) {
            document.getElementById('display').value = '';
        }
    } else {
        document.getElementById('display').value = '';
    }
}
