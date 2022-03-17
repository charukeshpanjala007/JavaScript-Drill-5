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
            cache[argument] = `Argument ${argument} is called from cache.`
            return cb(argument)
        }
    }
    return returnFunction
}

module.exports = cacheFunction