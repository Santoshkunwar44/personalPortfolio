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

export const setOpenPopOver = () => async (dispatch) => {

    dispatch({ type: "openPopover", payload: true })

}

export const setHidePopOver = () => async (dispatch) => {

    dispatch({ type: "setHidePopOver", payload: false })

}


