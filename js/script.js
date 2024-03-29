$(document).ready(function () {
    let display = $('#display');

    $('.number').click(function () {
        display.val(display.val() + $(this).val());
    });

    $('.operator').click(function () {
        let lastCharIsOperator = display.val().length > 0 && ['/', '*', '-', '+'].includes(display.val().slice(-1));
        let isOperator = ['/', '*', '-', '+'].includes($(this).val());
        if (lastCharIsOperator && isOperator) {
            return;
        }
        display.val(display.val() + $(this).val());
    });

    $('#clear').click(function () {
        display.val('');
    });


    $('#calculate').click(function () {
        if (display) {
            try {
                display.val(eval(display.val()));
            } catch (error) {
                alert("Please input valid data !!!")
                display.val('')
            }
        } else {
            display.val('')
        }
        if (isNaN(eval(display.val()))) {
            alert("Not a valid data value !!!")
            display.val('')
        }
        if (eval(display.val()) === Infinity) {
            alert("Infinity value !!!")
            display.val('')
        }
    });

    function calculate() {
        let expression = $('#display').val();
        if (expression) {
            try {
                $('#display').val(eval(expression));
            } catch (error) {
                alert("Please input valid data !!!");
                $('#display').val('');
            }
        } else {
            $('#display').val('');
        }

        if (eval(expression) === Infinity) {
            alert("Infinity value !!!");
            $('#display').val('');
        } else if (isNaN(eval(expression))) {
            alert("Not a valid number value !!!");
            $('#display').val('');
        }
    }

    $('#backspace').click(function () {
        let displayVal = display.val()
        display.val(displayVal.substring(0, displayVal.length - 1));
    });

    $('#C').click(function () {
        display.val('')
    });

    $("#display").on('input', function () {
        $(this).val(function (i, val) {
            return val.replace(/[^0-9+\-*.\/]/g, '');
        });
    });

    function clearDisplay() {
        $('#display').val('');
    }

    $('#display').on('keydown', function(event) {
        if (event.key === "=" || event.key === "Enter") {
            event.preventDefault();
            calculate();
        } else if (event.key === "c") {
            event.preventDefault();
            clearDisplay();
        }
    });

    $('#display').on('keypress', function (event) {
        let display = $(this);
        let currentValue = display.val();
        let lastChar = currentValue.slice(-1);
        let keyPressed = String.fromCharCode(event.which);

        if (["+", "-", "*", "/", "."].includes(lastChar) && ["+", "-", "*", "/", "."].includes(keyPressed)) {
            display.val(currentValue.slice(0, -1));
        }
    })
})
