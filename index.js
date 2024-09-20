function add() {
    var number = 0, result = 0;
    number = f.placeholder.value;
    result = number.charAt(number.length - 1);
    if (result == '+' || result == '-' || result == '/' || result == '*') {
        f.placeholder.value = number.substring(0, number.length - 1);
        f.placeholder.value += '+';
    }
    else {
        f.placeholder.value += '+';
    }
}
function sub() {
    var number = 0, result = 0;
    number = f.placeholder.value;
    result = number.charAt(number.length - 1);
    if (result == '+' || result == '-' || result == '/' || result == '*') {
        f.placeholder.value = number.substring(0, number.length - 1);
        f.placeholder.value += '-';
    }
    else {
        f.placeholder.value += '-';
    }
}
function div() {
    var number = 0, result = 0;
    number = f.placeholder.value;
    result = number.charAt(number.length - 1);
    if (result == '+' || result == '-' || result == '/' || result == '*') {
        f.placeholder.value = number.substring(0, number.length - 1);
        f.placeholder.value += '/';
    }
    else {
        f.placeholder.value += '/';
    }
}
function mul() {
    var number = 0, result = 0;
    number = f.placeholder.value;
    result = number.charAt(number.length - 1);
    if (result == '+' || result == '-' || result == '/' || result == '*') {
        f.placeholder.value = number.substring(0, number.length - 1);
        f.placeholder.value += '*';
    }
    else {
        f.placeholder.value += '*';
    }
}
