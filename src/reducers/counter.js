const counterReducer = (count=0, action) => {
    switch(action.type){
        case "increment":
            return count+1
        case "decrement":
            if(count!=0){return count-1}
        case "reset":
            count=0
        default:
            return count
    }
}

export default counterReducer;