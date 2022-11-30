export const setFilteredData = (data) => async (dispatch) => {
    dispatch({ type: "setFilteredData", payload: data })
}

export const setShowLoginModal = () => async (dispatch) => {
    dispatch({ type: "showLoginModal" })
}

export const setHideLoginModa = () => async (dispatch) => {
    dispatch({ type: "hideLoginModal" })
}
export const setOtpInfo = (data) => async (dispatch) => {
    dispatch({ type: "setOtpInfo", payload: data })
}