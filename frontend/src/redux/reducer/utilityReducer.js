

const utilityReducer = (state = { data: null, showLoginModal: false, otpData: null }, action) => {
    switch (action.type) {
        case "setFilteredData":
            return { ...state, data: action.payload }

        case "showLoginModal":
            return { ...state, showLoginModal: true }
        case "hideLoginModal":
            return { ...state, showLoginModal: false }

        case "setOtpInfo":
            return { ...state, otpData: action.payload.data }
        default:
            return state
    }
}
export default utilityReducer