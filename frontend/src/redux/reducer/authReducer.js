const authReducer = (state = {
    user: null




}, action) => {
    switch (action.type) {
        case "SAVE_USER_DATA":
            console.log(action)
            return {
                ...state, user: action.data
            }
        default:
            return state
    }
}
export default authReducer