const userdataReducer = (userdata={}, action) => {
    switch(action.type){
        case "add":
            return action.payload
        default:
            return userdata
    }
}

export default userdataReducer