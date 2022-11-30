const searchReducer = (state = {
    projectFilters: {}
},
    action

) => {
    switch (action.type) {
        case "SET_PROJECTFILTER":
            return { ...state, projectFilters: action.data }

        default:
            return state
    }
}
export default searchReducer