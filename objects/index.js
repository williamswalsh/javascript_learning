
// object literal syntax
// not a great way of creating objects
// if you want another object you have to duplicate whole code
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },

    draw: function() {
        console.log('draw');
    }
};


// Factory function
// NB: In Javascript don't have concept of function
// ES6 can drop duplication of property & parameter radius: radius, -> radius
function createCircle(radius) {

    // an object literal {} - is constructed using the Object() constructor
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    }
}

let smallCircle = createCircle(4);





// Constructor
function Circle(radius) {
    console.log('this: ', this);       // "this" refers to Circle object - because of "new" Operator
    this.radius = radius;

    // method
    this.draw = function() {
        console.log('draw');
    }
    // Note: No explicit return statement
    // new keyword adds the "return this;" statement
}
// global object
// If you don't use new before Circle(r) -> this refers to default global object
// browser - this refers to window object
// node    - this refers to global object


// new creates new Object -> Obj. literal={}
// sets this to point to that object
const another = new Circle(4);

// every object has a constructor property
// this tells us how it was constructed
console.log("How was smallCircle constructed", smallCircle.constructor)     // f Object() -> function created obj constructor
console.log("How was another constructed:", another.constructor)


// can construct object by using
// {} -> the target of this - an empty object
// 1 -> first parameter to new Circle() function
Circle.call({}, 1)

// can call a function
// can pass an array of parameters instead of param lists
Circle.apply({}, [1])

