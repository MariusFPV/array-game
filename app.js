let array = [2,0,2,0,2,4,2,0,0,0]

function play(array) {
    let dimArray = array.slice()
        
    //i - index of array element that is being checked
    function go(i) {
        let endReached = false

        if (array.length <= i + 1)
            return true

        while (dimArray[i] && !endReached){
            endReached = go(i + dimArray[i])
            dimArray[i] = dimArray[i] - 1
        }

        return endReached
    }

    //console.log(go(0) ? "winnable" : "not winnable")
    return go(0)
}

play(array)