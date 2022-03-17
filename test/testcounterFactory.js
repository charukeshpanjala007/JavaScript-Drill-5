const counterFactory = require("../counterFactory.js")

console.log("Test case-1")
let output = counterFactory(1)
console.log(output.increment())
console.log(output.increment())
console.log(output.decrement())


console.log("Test case-2")
output = counterFactory(100)
console.log(output.increment())


console.log("Test case-3")
output = counterFactory(undefined)
console.log(output.increment())


console.log("Test case-4")
output = counterFactory(null)
console.log(output.increment())

console.log("Test case-3")
output = counterFactory("undefined")
console.log(output.decrement())