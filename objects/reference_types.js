
// primitive types
let x = 10;
let y = x;
x = 20;     // copied by value 
// value doesn't propagate to y


// Pass by value
let number = 10;
function increase(number) {
    // local copy of number - doesn't propagate to argument 
    number++;
}
increase(number);
console.log(number) // 10

// Pass by reference
let no = {
    value: 10
};
function increase(number) {
    // local copy of number - doesn't propagate to argument 
    number.value++;
}
increase(no);
console.log(no) // 11