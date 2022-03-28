function Circle(radius) {
    let defaultLocation = { x: 0, y: 0};
    let computeOptimumLocation = function(factor) {}
    this.radius = radius;
    this.draw = function() {
        let x, y;
        computeOptimumLocation(0.1)
    }

    // getter
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y) {
                throw new Error('invalid location')
            }
            defaultLocation = value;
        }
    })
}

const circle = new Circle(4)
// circle.defaultLocation = 1; // Uncaught error