function calculateArea(shape, a, b = undefined) {
    if(shape.toLowerCase() === "circle")
        return Math.PI * a * a
    else if(shape.toLowerCase() === "square")
        return a * a
    else if(shape.toLowerCase() === "rectangle")
        return a * b
     else
        return undefined
}

// function calculateAreaSwitch(shape, a, b = undefined) {
//     switch(shape.toLowerCase()){
//         case "circle":
//             return Math.PI * a * a
//         case "square":
//             return a * a
//         case "rectangle":
//             return a * b
//         default:
//             return undefined
//     }
// }

console.log(calculateArea("circle", 5));      // 78.53981633974483
console.log(calculateArea("square", 4));      // 16
console.log(calculateArea("rectangle", 4, 6));// 24
console.log(calculateArea("triangle", 5, 6)); // undefined