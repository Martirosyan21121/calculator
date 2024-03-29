function addToDisplay(value) {
    let display = document.getElementById('display')
    let lastCharIsOperator = display.value.length > 0 && ['/', '*', '-', '+'].includes(display.value.slice(-1));
    let isOperator = ['/', '*', '-', '+'].includes(value);
    if (lastCharIsOperator && isOperator) {
        return;
    }
    display.value += value;
}

document.querySelector('.calculator').addEventListener('click', function (event) {
    if (event.target.classList.contains("number") || event.target.classList.contains("operator")){
        addToDisplay(event.target.value)
    } else if (event.target.classList.contains("equals")){
        calculate()
    } else if (event.target.classList.contains("clear")){
        clearDisplay()
    }
})

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
    input.value = input.value.replace(/[^0-9+\-*C/]/g, '');
}

function handleKeyPress(event) {
    let display = document.getElementById('display');
    let currentValue = display.value;
    let lastChar = currentValue.slice(-1);
    let keyPressed = String.fromCharCode(event.keyCode);

    if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(keyPressed)) {
        display.value = currentValue.slice(0, -1);
    }
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
            alert("Please input valid data !!!")
            document.getElementById('display').value = '';
        }
    } else {
        document.getElementById('display').value = '';
    }

    if (eval(expression) === Infinity){
        alert("Infinity value !!!")
        document.getElementById('display').value = '';

    } else if (isNaN(eval(expression))){
        alert("Not a valid number value !!!")
        document.getElementById('display').value = '';
    }
}

document.getElementById("display").addEventListener("keydown", function (event) {
    if (event.key === "=") {
        event.preventDefault();
     calculate()
    }
});
document.getElementById("display").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculate()
    }
});

document.getElementById("display").addEventListener("keydown", function (event) {
    if (event.key === "c") {
        event.preventDefault();
        clearDisplay()
    }
});