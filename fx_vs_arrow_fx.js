
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

function getR8Normal() {
    this.colour = 'white';
    console.log("BRRROOOOOOOM BRRRROOOOOOMMMMM");
}

// Arrow Function
const getR8Arrow = () => {
    this.colour = 'white';
    console.log("BRRROOOOOOOM BRRRROOOOOOMMMMM");
};
const x = new getR8Arrow();


// can use arguments variable
function myRegularFunction() {
  console.log(arguments);
}
// Arrow Fx -> can't use arguments variable
// can use args
// function myRegularFunction2() {
//   const myArrowFunction = () => {
//     console.log(arguments);
//   }
//   myArrowFunction('c', 'd');
// }
// myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }

// Can use "rest of params" "...args" to capture arguments to method
// as arguments doesn't work
function myRegularFunctionX(x, y) {
  const myArrowFunction = (...args) => {
    console.log(args);
  }
  myArrowFunction('c', 'd');
}
myRegularFunctionX('a', 'b'); // logs ['c', 'd']


// Implicit returns
// Regular fx - if no return statement/no expression after return keyword - return undefined
function myEmptyFunction() {
  42;
}
function myEmptyFunction2() {
  42;
  return;
}
myEmptyFunction();  // => undefined
myEmptyFunction2(); // => undefined

// Arrow fx 
// - if only one expression
// - and the curly braces{} are removed
// -> then expression is implicitly returned
const getCarEngineDetails = () => getCarEngineType();

function getCarEngineType() {
    return 'V8';
}
console.log(getCarEngineDetails())

class Hero {
    heroName: string;
  constructor(heroName) {
    this.heroName = heroName;
  }
  logName = () => {
    console.log(this.heroName);
  }
}
const batman = new Hero('Batman');
// as logName is an Arrow F(x)
// then the this reference doesn't need to be bound when
// invoked indirectly like for setTimeout & setInterval
setTimeout(batman.logName, 1000);       // similar to setInterval

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