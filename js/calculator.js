var num1, num2, result;

// Number formation
function data() {
    num1 = parseInt(document.getElementById('n1').value);
    num2 = parseInt(document.getElementById('n2').value);
}

// Output
function print(param) {
    document.getElementById('out').innerHTML = param;
}

function plus() {
    data();   
    if(isNaN(num1) || isNaN(num2)){
        print('Введите числа');
    }else{
        print(Math.round((num1 + num2) * 100) / 100);
    }
}

function minus() {
    data();
    if(isNaN(num1) || isNaN(num2)){
        print('Введите числа');
    }else{
        print(Math.round((num1 - num2) * 100) / 100);
    }
}

function multiply() {
    data();
    if(isNaN(num1) || isNaN(num2)){
        print('Введите числа');
    }else {
        print(Math.round((num1 * num2) * 100) / 100);
    } 
}

function divide() {
    data();
    if(isNaN(num1) || isNaN(num2)){
        print('Введите числа');
    }
    else if(num2 === 0) {
        print('Деление на ноль запрещено. Введите другое число');
    }else {
        print(Math.round((num1 / num2) * 100) / 100);
    }
}