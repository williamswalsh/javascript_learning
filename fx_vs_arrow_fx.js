
// this value inside a regular function is dynamic and depends on the invocation. 
// But this inside the arrow function is bound lexically and equals to this of the outer function.


// Function Declaration
function getR8Normal() {
    console.log("BRRROOOOOOOM BRRRROOOOOOMMMMM");
}

// Arrow Function
const getR8Arrow = () => {
    console.log("BRRROOOOOOOM BRRRROOOOOOMMMMM");
}

// This Keyword has different meaning where its called from
// - simple invokation
//   - strict mode: off global object
//   - strict mode: on  undefined
// - method invokation
//   - refers to containing object
// - indirect invokation
//   - value of this parameter myFunc.call(thisVal, arg1, ..., argN)
// - constructor invocation
//   - using new keyword - this ='s newly created instance

// - Arrow fx this
//   - this refers to outside containers this


// Arrow fxs cannot be used a constructor - cannot just add new keyword
// this is due to the meaning of "this" keyword.
// TypeError: Car is not a constructor 
// NB Typescript doesn't throw error during cross-compilation
//    Node will throw error when executing the code

// Arrow f(x)s accesses arguments from the outer function
function myRegularFunction() {
  const myArrowFunction = () => {
    console.log(arguments);
  }
}

// Regular methods don't bind containing object to "this" when called from a callback
// Arrow Method do. 