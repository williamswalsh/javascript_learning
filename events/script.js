const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Select all divs
const divs = document.querySelectorAll("div");
//  Foreach div log the div classname
divs.forEach(div => {
    console.log(div.className)
})

// Create new div in JavaScript
const newDiv = document.createElement('div')
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "red"
document.body.append(newDiv);


grandParent.addEventListener('click', e => {
    console.log("GP Capture")
}, { capture: true })


grandParent.addEventListener('click', e => {
    console.log("GP Bubble")
}, { capture: false })  // Not Required -> Default capture value is false

parent.addEventListener('click', e => {
    console.log("parent capture")
    e.stopPropagation()
}, { capture: true })
parent.addEventListener('click', e => {
    console.log("parent bubble")
})


child.addEventListener('click', e => {
    console.log("child capture")
}, { capture: true })
child.addEventListener('click', e => {
    console.log("child bubble")
})

document.addEventListener('click', e => {
    console.log("document capture")
}, { capture: true })
document.addEventListener('click', e => {
    console.log("document bubble")
})


// Bubbling events propagate up the tree
// Capture  events propagate up the tree

// event delegation
document.addEventListener('click', e => {
    if(e.target.matches("div")) {
        console.log('hi')
    }
})