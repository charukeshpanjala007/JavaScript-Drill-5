const limitFunctionCallCount = (cb , n) =>{
    if(!Number.isInteger(n) || typeof(cb)!== "function"){
        return ()=>{return null}
    }
    let functionCanBeCalled = n
    returnFunction = () =>{
        if(functionCanBeCalled>0){
            functionCanBeCalled --;
            return cb(functionCanBeCalled+1)
        }else{
            return null
        }
    }
    return returnFunction;
}

module.exports = limitFunctionCallCount