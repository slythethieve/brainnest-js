function biggerInt(num1, num2) {
    if(num1 == num2) {
        return "equal";
    }else {
        return (num1 > num2) ? "Num 1 is bigger" : "Num 2 is bigger";
    }
}

function isEven(num) {
    return (num % 2 == 0) ? true : false;
}
