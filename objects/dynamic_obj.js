// Objects in JS are dynamic
// You can add fields/methods to an object

function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(19);

// Can dynamically add properties to an object
circle.location = { x: 1, y: 2};
// same as:
// circle['location'] = { x: 1, y: 2};

const propertyName = 'specificName';
circle[propertyName] = 'William Walsh'


// can dynamically delete properties from object
delete circle.specificName



// can loop through properties in object
console.log("======================== All properties: ========================")
for (let propertyKey in circle) {
    console.log(propertyKey)
    console.log("Property value: ", circle[propertyKey])
}
console.log("======================== All properties end ========================")