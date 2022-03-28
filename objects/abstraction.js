
function Circle(radius) {

    // Implementation detail should be defined using let keyword
    // not accessible from outside the class
    let defaultLocation = { x: 0, y: 0};
    
    // properties(this.x) are accessible from outside the class
    this.radius = radius;

    // like a private method
    let computeOptimumLocation = function(factor) {}

    // This is part of the public interface
    // The inner details are abstracted
    this.draw = function() {

        // These variables have function scope
        // you can also access variable defined within this functions 
        // closure 
        // So that is the functional scope and the parents scope
        // Parents scope - called the closure
        // closure variables keep their state
        let x, y;
        computeOptimumLocation(0.1)
    }
}

const circle = new Circle(4)
circle.draw();
