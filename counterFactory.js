const counterFactory = (counter) => {
    if(!Number.isInteger(counter)){
        return {increment: ()=>{return "Invalid Input"}, decrement:()=>{return "Invalid Input"}}
    }
    let counterValue = counter
    function increment() {
        counterValue++;
        return counterValue
    }
    function decrement() {
        counterValue--;
        return counterValue
    }

    return {increment, decrement}
}


module.exports = counterFactory