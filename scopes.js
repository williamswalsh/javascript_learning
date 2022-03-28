
{
  var var_example = 2; // accessible globally
  const const_example = 3; // not accessible globally
  let let_example = 4;     // not accessible globally
}
// console.log("var_example: ", var_example)
// console.log("const_example: ", const_example)
// console.log("let_example: ", let_example)


// Both inaccessible outside function
function testingScopes() {
  var var_example = 7;
  let let_example = 8;
}

// console.log("var_example: ", var_example)
// console.log("let_example: ", let_example)


function functionalScope() {
  // All these have functional scope only
  let a = 4;
  var b = 5;
  const c = 6;
}
// console.log("let_example: ", a)
// console.log("var_example: ", b)
// console.log("const_example: ", c)


// All these variables have global scope - defined outside fx
let a = 1;
var b = 2;
const c = 3;
function globalScope() {
  // can access those from inside f(x)
  console.log("let_example: ", a)
  console.log("var_example: ", b)
  console.log("const_example: ", c)
}
globalScope()


// NB: If you don't declare a var it will be by default Global
// (even inside a function - NB: function needs to be called)
// If in Strict-mode -> which is a sensible default
// you can't use undeclared variables
function thisContainsAGlobalVar() {
    myGlobalVar = 77;
}
thisContainsAGlobalVar()
console.log("myGlobalVar: ",myGlobalVar);


// window object
// if you use var - variable belongs to window object
// if you use let - variable doesn't belong to window object
// See: testing_window_object.html


// NB: Recommendation: 
// Do not create global variables:
// Your global variables (or functions) can overwrite window variables (or functions).
