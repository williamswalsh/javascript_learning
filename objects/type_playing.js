function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(19);

// Enumerate all members
// only print non-functions(non-methods)
for (let key in circle) {
    if(typeof circle[key] !== 'function')
    console.log(key, circle[key])
}

// get all keys in object
const keys = Object.keys(circle);
console.log(keys)


// check object for specific property
if ('radius' in circle) {
    console.log('"circle" object has a radius property')
}
