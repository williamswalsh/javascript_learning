// uninitialised
let name;
console.log('name: ', name)     // undefined

let age = 31; // Number literal

// null - Clear the value of a variable
let lastName = null;

// dynamic language example
// can change type
let car = "ferrari";
console.log("typeof car: ", typeof car)
car = 450;
console.log("typeof car: ", typeof car)

// Objects
// have properties
let person = {
    fullName: 'will walsh',
    height: "178"
}

// dot notation
person.fullName = 'liam walsh';

// NB:
// bracket notation - can be used a runtime
person['fullName'] = 'bill walsh';
let property = 'height';
person[property] = 'bill walsh';



// Dynamic
// Array lengths can be changed
let colours = ['red', 'blue'];
colours[2] = 'green'
// could also assign a different type

// arrays have properties
console.log("Array length: ",colours.length)



