var greeting = "hi";

if (true) {
    let greeting = "say Hello instead"; 
}
console.log(greeting) // "hi"


// If it was a var being used to redeclare greeting
// then greeting would be modified at the global scale
// no warning logs to tell us that this is problematic
// that is why you should use let
// let is block-scoped
