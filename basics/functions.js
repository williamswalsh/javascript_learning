
function greet(name, lastName) {
    console.log('Hi, ' + name + ' ' + lastName);
}

// if you pass less than require num of arguments, the arguments not passed are
// undefined *****
greet('Liam');


// calculate a value
function square(number) {
    return number * number;
}

console.log('square(2): ' + square(2));