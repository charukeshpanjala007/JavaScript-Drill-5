function cacheFunction(cb) {
    if(!cb){
        return ()=>{return null}
    }
    let cache = {}
    returnFunction = (argument)=>{
        if(!argument){
            return ()=>{return null}
        }
        if(cache[argument]){
            return cache[argument]
        }
        else{
            cache[argument] = cb(argument)
            return cache[argument]
        }
    }
    return returnFunction
}

module.exports = cacheFunction