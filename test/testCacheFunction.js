const problem3 = require("../cacheFunction.js")

const cb = (number) => { return `Argument ${number} is called from function.` }

console.log("Test case-1")
let result = problem3(cb)
console.log(result(5))
console.log(result(5))

console.log("Test case-2")
result = problem3(undefined)
console.log(result(5))
console.log(result(5))

console.log("Test case-3")
result = problem3(undefined)
console.log(result(null))

console.log("Test case-4")
result = problem3(cb)
console.log(result(7))
console.log(result(7))
console.log(result(10))
console.log(result(12))
console.log(result(10))
console.log(result(12))
