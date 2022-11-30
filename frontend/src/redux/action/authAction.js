export const setUserAction = (data) => async (dispatch) => {
    console.log("inside the action")
    dispatch({ type: "SAVE_USER_DATA", data })
}