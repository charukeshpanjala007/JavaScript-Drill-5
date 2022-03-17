const problem2 = require("../limitFunctionCallCount.js")
const cbFunction = (n)=>{
    return `Function can be called ${n-1} more times`
}

console.log("Test Case-1")
let result = problem2(cbFunction,3)
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());

console.log("Test Case-2")
result = problem2(cbFunction,0)
console.log(result());
console.log(result());

console.log("Test Case-3")
result = problem2(null,3)
console.log(result());

console.log("Test Case-4")
result = problem2(undefined,3)
console.log(result());

console.log("Test Case-5")
result = problem2(cbFunction,undefined)
console.log(result());